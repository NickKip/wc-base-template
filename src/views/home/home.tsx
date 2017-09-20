import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement } from "components/base";
import { component } from "components/base/decorators/component";
import { Views } from "views";
import { Header } from "components/header/header";

@component({ tag: Views.Home.tag })
export class Home extends BaseComponent {

    // === Init === //

    async _init(): Promise<void> {}
    _setupEventListeners(): void {}

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./home.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        return (
            <div>
                <Header 
                    title="Home"
                />
            </div>
        );
    }
}
