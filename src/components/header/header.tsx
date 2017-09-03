import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement } from "components/base";
import { component } from "components/base/decorators/component";

@component({ tag: "wc-header" })
export class Header extends BaseComponent {

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
