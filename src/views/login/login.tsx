import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement } from "components/base";
import { component } from "components/base/decorators/component";
import { Views } from "views";
import { Header } from "components/header/header";

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
