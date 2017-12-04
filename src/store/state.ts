import { MessageEntity } from "models";

export interface State {

    _id?: string;
    _rev?: string;
    messageQueue: MessageEntity[];
}
