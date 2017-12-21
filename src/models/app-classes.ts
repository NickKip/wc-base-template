import { Store } from "../store/store";
import { State } from "../store/state";
import { RestConfig, RestClient } from "../index";

export interface AppClasses {

    store: new (name: string) => Store;
    rest: new (config: RestConfig, store: Store) => RestClient;
}
