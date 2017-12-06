import { State } from "./state";
import { MessageEntity } from "../models";
import { InfinityWindow } from "../Globals";

type PouchResponse = {

    ok: boolean;
    id: string;
    rev: string;
};

export abstract class Store<T extends State = State> {

    // === Protected === //

    protected state: T;
    protected name: string;

    // tslint:disable-next-line no-any
    private _db: any;
    private _saveDebouncer: number;
    private _saveToPersistentQueue: Promise<void> = Promise.resolve();

    // === Constructor === //

    constructor(name: string) {

        this.name = name;
        this._db = new (window as InfinityWindow).PouchDB(name);
    }

    // === Public === //

    public async init(): Promise<void> {

        this.state = await this._getFromPersistent();
    }

    public getFromState<T>(key: string): T {

        return this.state[key] || null;
    }

    // === Message Queue === //

    public async saveToMessageQueue(messageEntity: MessageEntity): Promise<void> {

        this.state.messageQueue.push(messageEntity);
        return await this._saveToPersistent();
    }

    public async removeFromMessageQueue(messageEntity: MessageEntity): Promise<void> {

        const idx: number = this.state.messageQueue.findIndex(x => x.id === messageEntity.id);

        if (idx > -1) {

            this.state.messageQueue.splice(idx, 1);
            return await this._saveToPersistent();
        }

        return;
    }

    public getMessageQueue(): MessageEntity[] {

        return this.state.messageQueue;
    }

    // === Protected === //

    protected async _saveToPersistent(): Promise<void> {

        clearTimeout(this._saveDebouncer);

        this._saveDebouncer = setTimeout(() => {

            if (this._db) {

                this._saveToPersistentQueue = this._saveToPersistentQueue.then(async () => {

                    try {

                        const res: PouchResponse = await this._db.put(this.state);
                        this.state._rev = res.rev;
                    }
                    catch (ex) {

                        throw new Error(ex);
                    }
                });

            } else {

                localStorage[this.name] = JSON.stringify(this.state);
            }
        }, 500);
    }

    protected async _getFromPersistent(): Promise<T> {

        if (this._db) {

            try {

                return await this._db.get(this.name);
            }
            catch (ex) {

                const state: T = this._generateInitialState();

                const res: PouchResponse = await this._db.put(state);
                state._rev = res.rev;

                return state;
            }

        } else {

            const state: T = localStorage.getItem(this.name)
                ? JSON.parse(localStorage.getItem(this.name))
                : this._generateInitialState();
        }
    }

    protected abstract _generateInitialState(): T;
}
