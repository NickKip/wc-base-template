// tslint:disable no-any

declare var require: any;

interface Window {

    BotWebSocketHandler: any;
    ClientManager: any;
    wc: any;
    PouchDB: any;
    process: any;
}

interface HistoryAPIEvent extends Event {

    // tslint:disable-next-line no-any
    state: any;
}
