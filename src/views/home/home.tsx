import { BaseComponent, JSXElement, prop, component, Header } from "components";
import { Views } from "views/views";

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
