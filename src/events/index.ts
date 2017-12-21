export interface EventContainer {

    [key: string]: HandlerDescriptor[];
}

export interface HandlerDescriptor {

    handler: Function;
    page?: string;
}

export class ClientEvents {

    // Client Manager Ready
    static ClientManagerReady: string = "client-manager-ready";

    // Popout Menu Events
    static OpenPopoutMenu: string = "open-popout-menu";
    static ClosePopoutMenu: string = "close-popout-menu";

    static SearchComplete: string = "search-complete";
}

export * from "./event-args";
