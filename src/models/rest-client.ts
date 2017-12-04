export enum HttpVerb {

    GET = "get",
    POST = "post"
}

export interface ApiResult<T> {

    error: boolean;
    errorMessage: string;
    result: T;
}

export type QueryParam = {

    key: string;
    value: string | number | object;
};

export interface RequestBody extends Object {

    // tslint:disable-next-line no-any
    [key: string]: any;
}

export interface MessageEntity {

    id: string;
    address: string;
    verb: HttpVerb;
    queryParams?: QueryParam[];
    body?: RequestBody;
    attemps: number;
    lastAttempt: number;
}
