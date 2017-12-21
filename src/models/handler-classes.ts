import { BaseHandler } from "../handlers/base-handler";
import { ClientManager } from "../client/clientManager";

export interface HandlerClasses {

    [key: string]: new (manager: ClientManager) => BaseHandler;
}
