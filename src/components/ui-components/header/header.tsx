import { BaseComponent, JSXElement, prop, component, Icon } from "../../";
import { buildStyles, getCSSVariable } from "../../../client";

@component({ tag: "wc-header" })
export class Header extends BaseComponent {

    // === Props === //

    @prop({ type: String, attribute: false, default: "" })
    title: string;

    @prop({ type: String, attribute: false, default: "" })
    subtitle: string;

    @prop({ type: String, attribute: false, default: null })
    bgColor: string;

    private leftIcon: Icon;

    private rightIcon: Icon;

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

        let styles: CSSStyleDeclaration = null;

        if (this.bgColor) {

            this.style.backgroundColor = this.bgColor;

            styles = buildStyles({

                color: getCSSVariable("--primary-color")
            });
        }

        return (
            <div className="container" style={ styles }>

                <div className="mainTitle">
                    { this._renderIcon(this.leftIcon) }

                    <h1>{ this.title }</h1>

                    { this._renderIcon(this.rightIcon) }
                </div>

                { this._renderSubtitle() }
            </div>
        );
    }

    private _renderIcon(icon: Icon): JSX.Element {

        return (
            <div className="icon">
                { icon }
            </div>
        );
    }

    private _renderSubtitle(): JSX.Element {

        if (!this.subtitle) {

            return null;
        }

        return (
            <div className="subtitle">
                <h3>{ this.subtitle }</h3>
            </div>
        );
    }
}
