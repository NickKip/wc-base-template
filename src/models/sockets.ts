export interface SocketConfig {
    uri: string;
    id: string;
}

export interface WSOutboundMessage {

    id?: string;
    type: string;

    // tslint:disable-next-line no-any
    payload?: any;
}

export interface WSMessageWrapper {

    payload: {

        id?: string;
        type: string;
        action?: string;

        // tslint:disable-next-line no-any
        payload?: any;
    };
}
