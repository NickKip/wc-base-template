export interface EventContainer {

    [key: string]: HandlerDescriptor[];
}

export interface HandlerDescriptor {

    handler: Function;
    page?: string;
}

export const enum ClientEvents {

    // Client Manager Ready
    ClientManagerReady = "client-manager-ready",

    // Popout Menu Events
    OpenPopoutMenu = "open-popout-menu",
    ClosePopoutMenu = "close-popout-menu"
}

export * from "./event-args";
