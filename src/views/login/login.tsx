import { BaseComponent, JSXElement, prop, component, Header } from "components";
import { Views } from "views/views";

@component({ tag: Views.Login.tag })
export class Login extends BaseComponent {

    // === Init === //

    async _init(): Promise<void> {}
    _setupEventListeners(): void {}

    // === Private === //

private _goToHome = (): void => {

        this.manager.router.goToPage(Views.Home);
    }

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./login.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        return (
            <div className="container">
                <Header
                    title="Login"
                />

                <div className="temp">
                    <button onClick={ this._goToHome }>Go To Home</button>
                </div>
            </div>
        );
    }
}
