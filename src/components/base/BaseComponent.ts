import * as skate from "skatejs/src/index";
import { JSXElement } from "components/base";
import { ClientManager } from "client/clientManager";
import { ClientEvents } from "events";

// tslint:disable typedef
// tslint:disable no-any

(<any>window).__CTRender = (<any>window).skate.h;

export abstract class BaseComponent extends skate.Component<any> {

    protected managerName: string = "wc";
    protected manager: ClientManager;

    // === Render lifecycle events === //

    abstract async _init(): Promise<void>;

    abstract _setupEventListeners(): void;

    abstract componentStyles(): JSXElement;

    abstract componentMarkup(): JSXElement;

    // === Private === //

    private async _bindManager(ev: Event): Promise<void> {

        this.manager = ClientManager.GetRegistration(this.managerName);

        if (this.manager) {

            this._setupEventListeners();
            await this._init();
        }
    }

    // === Lifecycle Events === //

    connectedCallback(): void {

        super.connectedCallback();

        const manager: ClientManager = ClientManager.GetRegistration(this.managerName);

        if (!manager || !manager.isReady) {

            document.addEventListener(ClientEvents.ClientManagerReady, (ev) => this._bindManager(ev));
        }
        else {

            this.manager = manager;
            this._setupEventListeners();
            Promise.resolve().then(async () => await this._init());
        }
    }

    // === Render function === //

    renderCallback(): any[] {

        const styles: JSXElement[] = ensureArray(this.componentStyles());

        const html: Array<JSXElement> = ensureArray(
            this.componentMarkup
                ? this.componentMarkup() || []
                : []
        );

        return [
            ...styles,
            ...html
        ];
    }
}

function ensureArray(value: JSXElement): Array<JSXElement> {

    return (value instanceof Array)
        ? value
        : [value];
}

// tslint:enable no-any
// tslint:enable typedef
