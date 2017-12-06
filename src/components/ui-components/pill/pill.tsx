import { BaseComponent, JSXElement, prop, component, Icon } from "../../";
import { IconDefinition } from "../../../models";
import { buildStyles } from "../../../client";

@component({ tag: "wc-pill" })
export class Pill extends BaseComponent {

    // === Attribute properties === //

    @prop({ type: String, attribute: true, default: "transparent" })
    type: string;

    // === Non-attribute properties === //

    @prop({ type: Object, attribute: false, default: null })
    icon: IconDefinition;

    // === Init === //

    async _init(): Promise<void> {}
    _setupEventListeners(): void {}

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./pill.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        if (!this.icon) {

            return null;
        }

        return (
            <div className={`container ${this.type}`}>
                {
                    this.icon
                        ? <Icon icon={ this.icon } width="12" height="12" />
                        : null
                }
                <span>
                    <slot />
                </span>
            </div>
        );
    }
}
