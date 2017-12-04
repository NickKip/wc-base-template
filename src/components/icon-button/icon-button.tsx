import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop, component } from "components/base";
import { IconDefinition, Icons } from "models";
import { Icon } from "components/Icon/Icon";
import { buildStyles } from "client/utils";

@component({ tag: "wc-icon-button" })
export class IconButton extends BaseComponent {

    // === Props === //

    @prop({ type: String, attribute: true, default: "transparent" })
    type: string;

    @prop({ type: Boolean, attribute: true, default: false })
    disabled: boolean;

    @prop({ type: String, attribute: true, default: "auto" })
    iconColor: string;

    @prop({ type: Object, attribute: false, default: null })
    icon: IconDefinition;

    @prop({ type: String, attribute: true, default: "18" })
    width: string;

    @prop({ type: String, attribute: true, default: "18" })
    height: string;

    @prop({ type: Boolean, attribute: false, default: false })
    isWaiting: boolean;

    @prop({ type: Function, attribute: false })
    action: () => void;

    // === Init == //

    async _init(): Promise<void> {}

    _setupEventListeners(): void {}

    // === Private === //

    private _performAction = (): void => {

        if (this.action) {

            this.action();
        }
    }

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./icon-button.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        const cssClasses: string[] = [
            this.type
        ];

        if (this.isWaiting) {
            cssClasses.push("waiting");
        }

        return (
            <button class={cssClasses.join(" ")} disabled={this.isWaiting || this.disabled} onClick={e => this._performAction() }>

                <Icon
                    icon={ this.icon }
                    color={ this.iconColor }
                    className="icon"
                    width={ this.width }
                    height={ this.height }
                />

                <slot />

            </button>
        );
    }
}
