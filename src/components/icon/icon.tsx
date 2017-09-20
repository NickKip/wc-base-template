import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop, component } from "components/base";
import { IconDefinition } from "models";
import { buildStyles } from "client/utils";

@component({ tag: "wc-icon" })
export class Icon extends BaseComponent {

    // === Attribute properties === //

    @prop({ type: String, attribute: true, default: "18" })
    width: string;

    @prop({ type: String, attribute: true, default: "18" })
    height: string;

    @prop({ type: String, attribute: true, default: "auto" })
    color: string;

    @prop({ type: Boolean, attribute: true, default: false })
    spin: boolean;

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
                { require("./icon.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        if (!this.icon) {

            return null;
        }

        const styles: CSSStyleDeclaration = buildStyles({
            fill: this.color !== "auto"
                ? this.color
                : window.getComputedStyle(this.parentElement).color,
            width: this.width,
            height: this.height
        });

        const viewBox: string = this.icon.viewBox || "0 0 1024 1024";
        const svgPaths: string[] = (this.icon.paths || []);

        return (
            <svg width={this.width} height={this.height} viewBox={viewBox} style={styles}>
                {svgPaths.map((path, idx) => (
                    <path d={path}/>
                ))}
            </svg>
        );
    }
}
