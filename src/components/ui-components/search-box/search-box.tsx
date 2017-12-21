import { BaseComponent } from "../../base/BaseComponent";
import { JSXElement, prop, component } from "../../base";
import { Icon } from "../icon/icon";
import { Icons, IconDefinition } from "../../../models";
import { ClientEvents } from "../../../events";

@component({ tag: "wc-search-box" })
export class SearchBox extends BaseComponent {

    // === Props === //

    @prop({ type: Function, attribute: false, default: null })
    action: (term: string) => void;

    @prop({ type: Boolean, attribute: true, default: false })
    disableExpand: boolean;

    @prop({ type: Boolean, attribute: true, default: false })
    searchExpanded: boolean;

    @prop({ type: String, attribute: false, default: "" })
    searchTerm: string;

    @prop({ type: Boolean, attribute: true, default: false })
    searching: boolean;

    @prop({ type: Object, attribute: false, default: null })
    searchIcon: IconDefinition;

    @prop({ type: Object, attribute: false, default: null })
    cancelIcon: IconDefinition;

    @prop({ type: Object, attribute: false, default: null })
    loadingIcon: IconDefinition;

    private debouncer: number;

    // === Init == //

    async _init(): Promise<void> {}

    _setupEventListeners(): void {

        this.manager.on(ClientEvents.SearchComplete, () => this.searching = false);
    }

    // === Private === //

    private _toggleSearch = (e: Event): void => {

        if (e.type === "focus") {

            this.searchExpanded = true;
        }
        else {

            this.searchExpanded = false;
        }
    }

    private _updateSearchTerm = (e: Event): void => {

        this.searchTerm = (e.currentTarget as HTMLInputElement).value;

        clearTimeout(this.debouncer);

        if (this.action) {

            this.debouncer = setTimeout(() => {

                this.searching = true;
                this.action(this.searchTerm);
            }, 500);
        }
    }

    private _clearSearch = (): void => {

        this.searchTerm = "";
        this.action(this.searchTerm);
        clearTimeout(this.debouncer);
    }

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./search-box.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        return (
            <div className="container">
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search"
                        onFocus={ this._toggleSearch }
                        onBlur={ this._toggleSearch }
                        className={`${this.searchExpanded ? "expanded" : "" }`}
                        onInput={ this._updateSearchTerm }
                        value={ this.searchTerm }
                    />
                </div>
                <div className="control">
                    { this._renderIcon() }
                </div>
            </div>
        );
    }

    private _renderIcon(): JSXElement {

        if (this.searching) {

            return <Icon icon={ this.loadingIcon || Icons.FontAwesome.CircleNotch } width={14} height={14} onClick={ this._clearSearch } spin={ true } />;
        }

        if (this.searchTerm) {

            return <Icon className="clearSearch" icon={ this.cancelIcon || Icons.FontAwesome.Cross } width={14} height={14} onClick={ this._clearSearch } spin={ this.searching } />;
        }
        else {

            return <Icon icon={ this.searchIcon || Icons.FontAwesome.MagnifyingGlass } width={14} height={14} />;
        }
    }
}
