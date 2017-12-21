// tslint:disable no-any

export interface InfinityWindow extends Window {

    BotWebSocketHandler: any;
    ClientManager: any;
    cti: any;
    wc: any;
    PouchDB: any;
    process: any;
}

export interface HistoryAPIEvent extends Event {

    // tslint:disable-next-line no-any
    state: any;
}
