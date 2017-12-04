import { SocketConfig, WSMessageWrapper, WSOutboundMessage } from "models";
import { WSEventArgs } from "events/event-args/ws-event-args";
import { ClientEvents } from "events";

interface WebSocketEvent extends Event {

    // tslint:disable-next-line no-any
    data?: any;
    type: string;
}

export class WebSocketClient {

    public id: string;

    // === Private Props === //

    private config: SocketConfig;
    private socket: WebSocket;
    private forceClose: boolean = false;
    // Determines if the client will handle automatic connection retries
    private enableAutoReconnect: boolean = false;

    // Ping timeout
    private pingTimeout: number;
    // Ping waiting time
    private pingWaitingTime: number = 15000;
    // Time last ping was received
    private lastPingReceived: number = 0;
    // Holder for the timeout
    private reconnectTimeout: number;
    // MS to delay before trying to reconnect
    private reconnectInterval: number = 5000;
    // Decay reconnect attempts in seconds
    private reconnectDecay: number = 1.5;
    // Reconnection attempts
    private reconnectAttempts: number = -1;

    // tslint:disable-next-line no-any
    private messageCallback: (message: WSEventArgs) => void;

    // === Constructor === //

    constructor(websocketConfig: SocketConfig, messageCallback: (message: WSEventArgs) => void) {

        this.config = websocketConfig;
        this.id = this.config.id;
        this.messageCallback = messageCallback;

        this.connect();
        this._bindEvents();
    }

    // === Private === //

    private _bindEvents(): void {

        this.socket.onopen = (e) => this._onOpen(e);
        this.socket.onmessage = (m) => this._onMessage(m);
        this.socket.onclose = (e) => this._onClose(e);
    }

    // tslint:disable-next-line no-any
    private _onOpen(event: WebSocketEvent): void {

        // tslint:disable-next-line no-console
        console.log(`Opened socket: ${this.config.uri}`, event);

        this.forceClose = false;

        if (this.enableAutoReconnect) {

            clearTimeout(this.reconnectTimeout);
            this.reconnectAttempts = -1;

            this.pingTimeout = setTimeout(() => this._pingTimeout(), this.pingWaitingTime);
        }

        this.sendMessage({ type: "register" });
    }

    private _onClose(event: WebSocketEvent): void {

        // tslint:disable-next-line no-console
        console.log(`Closed socket: ${this.config.uri}`, event);

        // We have been disconnected by something, so attempt to reconnect
        if (this.enableAutoReconnect && !this.forceClose) {

            this.reconnect();
        }
    }

    private _onMessage(message: WebSocketEvent): void {

        try {

            const data: WSMessageWrapper = JSON.parse(message.data);

            if (this.enableAutoReconnect && data.payload.type === "ping") {

                clearTimeout(this.pingTimeout);
                delete this.pingTimeout;

                this.sendMessage({ type: "ping-response" });
            }
            else {

                const args: WSEventArgs = new WSEventArgs(data.payload.action, data.payload.payload);

                this.messageCallback(args);
            }
        }
        catch (ex) {

            // tslint:disable-next-line no-console
            console.error(ex);
        }
    }

    private _pingTimeout(): void {

        clearTimeout(this.pingTimeout);
        this.socket.close();
    }

    // === Public === //

    public connect(): void {

        try {

            delete this.socket;
            this.socket = new WebSocket(this.config.uri);
            this._bindEvents();
        }
        catch (ex) {

            // tslint:disable-next-line no-console
            console.log("Websocket connection error:", ex);

            if (this.enableAutoReconnect) {

                this.reconnect();
            }
        }
    }

    public disconnect(): void {

        this.forceClose = true;
        this.socket.close();
    }

    public reconnect(): void {

        clearTimeout(this.reconnectTimeout);
        ++this.reconnectAttempts;

        const reconnectIn: number = this.reconnectInterval * Math.pow(this.reconnectDecay, this.reconnectAttempts);

        // tslint:disable-next-line no-console
        console.log("Attempting to reconnect in:", reconnectIn);

        this.reconnectTimeout = setTimeout(() => this.connect(), reconnectIn);
    }

    public sendMessage(message: WSOutboundMessage): void {

        if (!message.id) {

            message.id = this.config.id;
        }

        this.socket.send(JSON.stringify(message));
    }

    public isConnected(): boolean {

        return this.socket.readyState === 1;
    }
}
