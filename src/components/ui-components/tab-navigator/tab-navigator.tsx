import { BaseComponent, JSXElement, prop, component, Icon, Header, Button } from "../../";
import { ViewRegistration } from "../../../views";
import { Icons, IconDefinition, TabbedNavigatorButton } from "../../../models";

@component({ tag: "wc-tab-navigator" })
export class TabNavigator extends BaseComponent {

    @prop({ type: Array, attribute: false, detault: [] })
    tabs: TabbedNavigatorButton[];

    private currentViewTag: string;

    // === Init === //

    async _init(): Promise<void> {

        this.currentViewTag = this.manager.router.currentPage.tag;
    }

    _setupEventListeners(): void {}

    // === Private === //

    private _tabRowClick(view: ViewRegistration): void {

        this.manager.router.goToPage(view);
    }

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./tab-navigator.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        if (!this.tabs || !this.tabs.length) {

            return null;
        }

        return (
            <div className="container">

                {
                    this.tabs.map(x => this._renderTab(x.iconDefinition, x.text, x.view))
                }

            </div>
        );
    }

    private _renderTab(icon: IconDefinition, text: string, view: ViewRegistration): JSXElement {

        const selected: string = view.tag === this.currentViewTag ? "selected" : "";

        return (
            <div className={`tab ${selected}`} onClick={ () => this._tabRowClick(view) }>
                <div className="icon">
                    <Icon icon={ icon } />
                </div>

                <div className="text">
                    { text }
                </div>
            </div>
        );
    }
}
