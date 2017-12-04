import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop } from "components/base";
import { component } from "components/base/decorators/component";
import { Views, ViewRegistration } from "views";
import { Header } from "components/header/header";
import { Button } from "components/button/button";
import { Icons, IconDefinition, TabbedNavigatorButton } from "models";
import { Icon } from "components/Icon/Icon";

@component({ tag: "wc-tab-navigator" })
export class TabNavigator extends BaseComponent {

    @prop({ type: Array, attribute: false, detault: [] })
    tabs: TabbedNavigatorButton[];

    // === Init === //

    async _init(): Promise<void> {}
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

        if (!this.manager) {

            return null;
        }

        const selected: string = view.tag === this.manager.router.currentPage.tag ? "selected" : "";

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
