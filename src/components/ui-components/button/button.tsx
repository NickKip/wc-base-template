import { BaseComponent, JSXElement, prop, component, Icon } from "../../";
import { IconDefinition, Icons } from "../../../models";
import { buildStyles } from "../../../client";

@component({ tag: "wc-button" })
export class Button extends BaseComponent {

    // === Props === //

    @prop({ type: String, attribute: true, default: "transparent" })
    type: string;

    @prop({ type: String, attribute: true, default: "auto" })
    color: string;

    @prop({ type: Boolean, attribute: true, default: false })
    selected: boolean;

    @prop({ type: Boolean, attribute: true, default: false })
    disabled: boolean;

    @prop({ type: Boolean, attribute: true, default: false })
    large: boolean;

    @prop({ type: Boolean, attribute: true, default: false })
    isTransparent: boolean;

    @prop({ type: String, attribute: true })
    textColor: string;

    @prop({ type: String, attribute: true, default: "auto" })
    iconColor: string;

    @prop({ type: String, attribute: true, default: "18px" })
    iconWidth: string;

    @prop({ type: String, attribute: true, default: "18px" })
    iconHeight: string;

    @prop({ type: Object, attribute: false, default: null })
    icon: IconDefinition;

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
                { require("./button.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        const cssClasses: string[] = [
            this.type
        ];

        if (this.selected) {
            cssClasses.push("selected");
        }

        if (this.large) {
            cssClasses.push("large");
        }

        if (this.isWaiting) {
            cssClasses.push("waiting");
        }

        if (this.isTransparent) {
            cssClasses.push("transparent");
        }

        const textColorStyles: CSSStyleDeclaration = buildStyles(
            !!this.textColor
                ? { color: this.textColor }
                : {}
        );

        return (
            <button class={cssClasses.join(" ")} style={textColorStyles} disabled={this.isWaiting || this.disabled} onClick={e => this._performAction() }>
                <div class="button-content">
                    {
                        !this.isWaiting && !!this.icon
                            ? <Icon icon={this.icon} color={this.iconColor} width={this.iconWidth} height={this.iconHeight} class="icon" />
                            : null
                    }
                    {
                        this.isWaiting
                            ? <Icon icon={ Icons.FontAwesome.Spinner } color={this.iconColor} width={this.iconHeight} height={this.iconHeight} spin={true} class="icon" />
                            :   <div class="label"><slot /></div>
                    }
                </div>
            </button>
        );
    }
}
