import * as Handlers from "../handlers";
import { Store } from "../store/store";
import { ClientEvents, EventContainer, HandlerDescriptor } from "../events";
import { Router } from "../client/router/router";
import { ViewRegistration, ViewRegistrations } from "../views";
import { WSEventArgs } from "../events/event-args";
import { AppConfig } from "../client/config/config";
import { RestClient } from "../client/rest-client/rest-client";
import { AppClasses, HandlerClasses } from "../models";
import { InfinityWindow } from "../Globals";
import { BaseHandler } from "../handlers";
import { EventArgs } from "../events";

export class ClientManager {

    // === Static === //

    static Registrations: Map<string, ClientManager> = new Map();

    static GetRegistration(name: string): ClientManager {

        return ClientManager.Registrations.get(name);
    }

    static FireReady(): void {

        document.dispatchEvent(new CustomEvent(ClientEvents.ClientManagerReady));
    }

    // === Private === //

    private name: string;
    private appContainer: string;
    private appClasses: AppClasses;
    private handlers: HandlerClasses;

    private events: EventContainer = {};

    // Message Events
    private _messageHandlers: Map<string, Handlers.BaseHandler> = new Map<string, Handlers.BaseHandler>();
    private _messageProcessorQueue: Promise<void> = Promise.resolve();

    // === Public === //

    public isReady: boolean = false;
    public config: AppConfig;
    public store: Store;
    public rest: RestClient;
    public router: Router;
    public views: ViewRegistrations;

    // === Constructor === //

    constructor(appContainer: string, defaultView: string, config: AppConfig, views: ViewRegistrations, appClasses: AppClasses, handlers: HandlerClasses) {

        this.name = "infinityFramework";
        this.config = config;
        this.appClasses = appClasses;
        this.handlers = handlers;
        this.appContainer = appContainer;
        this.views = views;
        ClientManager.Registrations.set(this.name, this);

        if (!(window as InfinityWindow).cti) {

            const store: Store = new appClasses.store(this.name);
            this.bootstrap(store, appClasses);
        }
    }

    private bootstrap(store: Store, appClasses: AppClasses): Promise<void> {

        return Promise.resolve()
            .then(() => this._setStore(store))
            .then(() => this._setRestClient(appClasses))
            .then(() => this._setRouter())
            .then(() => this._setupHandlers())
            .then(() => this._bindStartupEvents())
            .then(() => {

                this.isReady = true;
                ClientManager.FireReady();
            });
    }

    private _setStore(store: Store): Promise<void> {

        return new Promise<void>(resolve => {

            this.store = store;
            this.store.init().then(() => resolve());
        });
    }

    private _setRestClient(appClasses: AppClasses): Promise<void> {

        return new Promise<void>(resolve => {

            this.rest = new appClasses.rest(this.config.rest, this.store);
            resolve();
        });
    }

    private _setRouter(): Promise<void> {

        return new Promise<void>(resolve => {

            this.router = new Router(this.appContainer, this.views, (view: ViewRegistration) => this.unloadEvents(view));
            resolve();
        });
    }

    private _setupHandlers(): Promise<void> {

        return new Promise(resolve => {

            const handlers: BaseHandler[] = Object.keys(this.handlers).map(x => new this.handlers[x](this));

            handlers.map(handler => {

                if (handler.messageType) {

                    this._messageHandlers.set(handler.messageType, handler);
                }

                if (handler.eventType && handler.eventType.length) {

                    handler.eventType.forEach(eventType => {

                        this.on(eventType as string, async (e: EventArgs) => {

                            try {

                                await handler.callHandleEvent(eventType, e);
                            }
                            catch (ex) {

                                // tslint:disable-next-line no-console
                                console.error("Error handling event", `Event type: ${eventType.toString()}. ${ex.message || ex}`);
                            }
                        }, true);
                    });
                }
            });

            resolve();
        });
    }

    private _bindStartupEvents(): Promise<void> {

        return new Promise<void>(resolve => {

            document.addEventListener("click", () => this.emit(ClientEvents.ClosePopoutMenu));

            resolve();
        });
    }

    // === Events === //

    // tslint:disable-next-line no-any
    public on(key: string, handler: any, global: boolean = false): void {

        const currPage: string = this.router.currentPage.tag;

        const events: HandlerDescriptor[] = this.events[key];

        if (events) {

            events.push({
                page: !global ? currPage : null,
                handler: handler
            });
        }
        else {

            this.events[key] = [{
                page: !global ? currPage : null,
                handler: handler
            }];
        }
    }

    // tslint:disable-next-line no-any
    public emit(key: string, data?: any): void {

        const events: HandlerDescriptor[] = this.events[key];

        if (events) {

            events.map(x => x.handler(data));
        }
    }

    private unloadEvents(prevView: ViewRegistration): void {

        Object.keys(this.events).map(x => {

            this.events[x] = this.events[x].filter(e => e.page !== prevView.tag);
        });
    }

    private _handleNewWSMessage(message: WSEventArgs): void {

        const handler: Handlers.BaseHandler = this._messageHandlers.get(message.action);

        if (!handler) {

            return;
        }

        this._messageProcessorQueue = this._messageProcessorQueue
            .then(async () => {

                try {

                    return await handler.callHandleMessage(message);
                }
                catch (ex) {

                    // tslint:disable-next-line no-console
                    console.error("Error processing message", ex);
                }
        })
        .catch(ex => {

            // tslint:disable-next-line no-console
            console.error("Error processing message", ex);
        });
    }

    // === Public === //

    public triggerBootstrap(): void {

        this.bootstrap(new this.appClasses.store(this.name), this.appClasses);
    }
}
