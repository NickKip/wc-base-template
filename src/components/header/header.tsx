import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement } from "components/base";

export class Header extends BaseComponent {

    static get is(): string {
        return "wc-header";
    }

    async _init(): Promise<void> {}
    _setupEventListeners(): void {}

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./header.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

Header.register();
