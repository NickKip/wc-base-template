import { Store } from "store/store";
import { ClientEvents } from "events";
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

    // Todo: proper type defs
    private events: { [key: string]: Function[] } = {};

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

            this.router = new Router(this.appContainer, defaultView);
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
    public on(key: string, handler: any): void {

        const events: Function[] = this.events[key];

        if (events) {

            events.push(handler);
        }
        else {

            this.events[key] = [handler];
        }
    }

    // tslint:disable-next-line no-any
    public emit(key: string, data?: any): void {

        const events: Function[] = this.events[key];

        if (events) {

            events.map(x => x(data));
        }
    }

    // === Public === //
}

window.ClientManager = ClientManager;
window.wc = new ClientManager("wc", "body", "view-login");
