import { ClientManager } from "../client/clientManager";
import { ClientEvents, EventArgs, WSEventArgs } from "../events";

export abstract class BaseHandler {

    // === Protected Props === //

    protected manager: ClientManager;

    // === Public Props === //

    // public messageType: string = null;
    public eventType: ClientEvents[] = [];
    public filters: string[] = [];

    // === Constructor === //

    constructor (manager: ClientManager) {

        this.manager = manager;
    }

    // === Protected === //

    protected abstract async handleMessage(message: WSEventArgs): Promise<void>;

    protected abstract async handleEvent(eventType: ClientEvents, eventArgs: EventArgs): Promise<void>;

    // === Public === //

    public async callHandleMessage(message: WSEventArgs): Promise<void> {

        await this.handleMessage(message);
    }

    public async callHandleEvent(eventType: ClientEvents, eventData: EventArgs): Promise<void> {

        await this.handleEvent(eventType, eventData);
    }

    public registerFilter(filter: string): void {

        if (!this.filters.includes("filter")) {

            this.filters.push(filter);
        }
    }

    public unregisterFilter(filter: string): void {

        const remove: number = this.filters.findIndex(x => x === filter);

        if (remove > -1) {

            this.filters.splice(remove, 1);
        }
    }

    public clearAllFilters(): void {

        this.filters = [];
    }
}
