import { Store } from "../store/store";
import { State } from "../store/state";

export interface AppClasses {

    store: new (name: string) => Store;
}
