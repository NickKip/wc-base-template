import { RestConfig } from "../config/config";
import { Store } from "../../store/store";
import { ApiResult, QueryParam, HttpVerb, RequestBody, MessageEntity, RequestHeaders } from "../../models";

export class RestClient {

    // === Protected Props === //

    protected config: RestConfig;
    protected store: Store;

    protected headers: Headers;
    protected requestOptions: RequestInit;

    // === Constructor === //

    constructor(restConfig: RestConfig, store: Store) {

        this.config = restConfig;
        this.store = store;

        this._resetRequestOptions();
    }

    // === Protected === //

    protected _generateQueryString(queryParams: QueryParam[]): string {

        if (!queryParams) {

            return "";
        }

        return queryParams.reduce((acc, cur, idx) => {

            let query: string = "";

            // tslint:disable curly
            if (idx === 0) query += "?";
            else query += "&";
            // tslint:enable curly

            if (typeof cur.value !== "string") {

                cur.value = JSON.stringify(cur.value);
            }

            query += `${cur.key}=${encodeURIComponent(cur.value)}`;

            return acc += query;
        }, "");
    }

    protected _resetRequestOptions(): void {

        this.headers = new Headers();

        this.requestOptions = {

            headers: this.headers
        };
    }

    // tslint:disable-next-line no-any
    protected async _sendMessage<T>(
        uri: string,
        method: HttpVerb,
        queryParams: QueryParam[] = [],
        body: RequestBody = {},
        headers: RequestHeaders = {},
        addToQueue: boolean = false
    ): Promise<ApiResult<T>> {

        if (!this.config) {

            throw new Error("Rest client not properly configured.");
        }

        const messageEntity: MessageEntity = {

            id: "",
            address: `${this.config.baseUri}${uri}`,
            verb: method,
            headers: headers,
            queryParams: queryParams,
            body: body,
            attemps: 0,
            lastAttempt: 0
        };

        if (addToQueue) {

            // TODO: Add to message queue
            await this.store.saveToMessageQueue(messageEntity);
        }

        return await this._httpRequest<T>(messageEntity);
    }

    // tslint:disable-next-line no-any
    protected async _httpRequest<T>(msg: MessageEntity): Promise<ApiResult<T>> {

        let req: RequestInit;

        this.requestOptions = {

            headers: new Headers({
                // "Content-Type": "application/json",
                ...msg.headers
            })

        };

        if (msg.verb === HttpVerb.GET) {

            req = Object.assign({

                method: msg.verb,
                mode: "cors"
            }, this.requestOptions);

            msg.address += this._generateQueryString(msg.queryParams);
        }
        else {

            req = Object.assign({
                method: msg.verb,
                mode: "cors",
                body: JSON.stringify(msg.body)
            }, this.requestOptions);
        }

        const res: Response = await fetch(msg.address, req);

        const result: ApiResult<T> = {

            error: !res.ok ? true : false,
            errorMessage: !res.ok ? `${res.status}: ${res.statusText}` : null,
            result: await res.json()
        };

        // Remove from message queue if message was successful
        if (res.ok) {

            await this.store.removeFromMessageQueue(msg);
        }
        else {

            ++msg.attemps;
            msg.lastAttempt = new Date().getTime();
        }

        this._resetRequestOptions();

        return result;
    }

    // === Public === //

    public async processQueuedMessages(): Promise<void> {

        this.store.getMessageQueue().forEach(x => this._httpRequest(x));
    }

    // tslint:disable-next-line no-any
    public async exampleRequest<T>(param: string): Promise<ApiResult<T>> {

        const queryParams: QueryParam[] = [

            { key: "filename", value: param }
        ];

        try {

            const result: ApiResult<T> = await this._sendMessage<T>("your-endpoint-address", HttpVerb.GET, queryParams);

            return result;
        }
        catch (ex) {

            // tslint:disable-next-line no-console
            console.log("Error:", ex);
        }
    }
}
