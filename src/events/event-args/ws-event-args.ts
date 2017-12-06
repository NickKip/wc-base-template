import { EventArgs } from "../event-args";

export class WSEventArgs extends EventArgs {

    public action: string;
    // tslint:disable-next-line no-any
    public payload: any;

    // tslint:disable-next-line no-any
    constructor(action: string, payload: any) {

        super();
        this.action = action;
        this.payload = payload;
    }
}
