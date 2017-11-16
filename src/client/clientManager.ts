import { Store } from "store/store";
import { ClientEvents, EventContainer, HandlerDescriptor } from "events";
import { Router } from "client/router/router";
import { Views, ViewRegistration } from "views";

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

    private events: EventContainer = {};

    // === Public === //

    public isReady: boolean = false;
    public store: Store;
    public router: Router;

    // === Constructor === //

    constructor(name: string, appContainer: string, defaultView: string) {

        this.name = name;
        this.appContainer = appContainer;
        ClientManager.Registrations.set(this.name, this);

        const store: Store = new Store(this.name);

        this.bootstrap(store);
    }

    private bootstrap(store: Store): Promise<void> {

        return Promise.resolve()
            .then(() => this._setStore(store))
            .then(() => this._setRouter())
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

    private _setRouter(): Promise<void> {

        return new Promise<void>(resolve => {

            const defaultView: ViewRegistration = Object.keys(Views).map(x => Views[x]).find(x => x.default);

            this.router = new Router(this.appContainer, defaultView, (view: ViewRegistration) => this.unloadEvents(view));
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

    // === Public === //
}

window.ClientManager = ClientManager;
window.wc = new ClientManager("wc", "body", "view-login");
