import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop } from "components/base";
import { component } from "components/base/decorators/component";

@component({ tag: "wc-header" })
export class Header extends BaseComponent {

    // === Props === //

    @prop({ type: String, attribute: false, default: "" })
    title: string;

    // === Init === //

    async _init(): Promise<void> {}
    _setupEventListeners(): void {}

    // === Render === //

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
                <h1>{ this.title }</h1>
            </div>
        );
    }
}
