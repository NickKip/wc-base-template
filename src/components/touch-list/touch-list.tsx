import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop, component } from "components/base";
import { buildStyles } from "client/utils";
import { Button } from "components/button/button";
import { slideToReveal, slideToRevealEnd } from "client/slideReveal";
import { IconDefinition } from "models";

interface ButtonDefinition<T> {

    icon: IconDefinition;
    action(item: T): void;
    iconColor: string;
    width: string;
    height: string;
}

@component({ tag: "wc-touch-list" })
export class TouchList<T extends {}> extends BaseComponent {

    // === Props === //

    @prop({ type: Array, attribute: false, default: [] })
    items: Array<T>;

    @prop({ type: Function, attribute: false, default: null })
    renderRow: (t: T) => JSX.Element;

    @prop({ type: Function, attribute: false, default: null })
    rowClick: (t: T) => void;

    @prop({ type: Array, attribute: false, default: [] })
    backgroundButtons: ButtonDefinition<T>[];

    @prop({ type: Boolean, attribute: false, default: true })
    slideEnabled: boolean;

    @prop({ type: Function, attribute: false, default: null })
    renderWhenEmpty: () => JSXElement;

    @prop({ type: Boolean, attribute: false, default: false })
    hideEmptyMessage: boolean;

    @prop({ type: String, attribute: false, default: null })
    emptyMessage: string;

    @prop({ type: String, attribute: false, default: "" })
    redraw: string;

    // === Init === //

    async _init(): Promise<void> {}

    _setupEventListeners(): void {}

    // === Private === //

    private _rowClick(e: Event, item: T): void {

        // This is used in case we have lists within lists
        e.stopImmediatePropagation();

        if (this.rowClick) {

            this.rowClick(item);
        }
    }

    // === Render === //

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./touch-list.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        if (!this._renderRow) {

            return null;
        }

        return (
            <div className="container">
                { 
                    this.items && this.items.length > 0
                        ? this.items.map(x => this._renderRow(x))
                        : this.hideEmptyMessage ? null : this._renderNoItems()
                }
            </div>
        );
    }

    private _renderRow(item: T): JSX.Element {

        const offset: number = this.backgroundButtons 
            ? this.backgroundButtons.length * 15
            : -1;

        return (
            <div className="row">

                <div
                    className="foreground"
                    style={ buildStyles({ transform: "translateX(0vw)" })}
                    onClick={ (e) => this._rowClick(e, item) }
                    ontouchmove={ this.slideEnabled ? (e) => slideToReveal(e, offset) : null }
                    ontouchend={ this.slideEnabled ? (e) => slideToRevealEnd(e, offset) : null }
                >
                    { this.renderRow(item) }
                </div>

                {
                    this.slideEnabled
                        ? this._renderBgButtons(item)
                        : null
                }

            </div>
        );
    }

    private _renderBgButtons(item: T): JSX.Element {

        if (!this.backgroundButtons || this.backgroundButtons.length === 0) {

            return null;
        }

        const styles: CSSStyleDeclaration = buildStyles({
            width: `${this.backgroundButtons.length * 15}vw`
        });

        return (
            <div className="background" style={ styles }>
                {
                    this.backgroundButtons.map(x => {

                        return (
                            <Button
                                icon={ x.icon }
                                iconWidth={ x.width }
                                iconHeight={ x.height }
                                iconColor={ x.iconColor }
                                action={ () => x.action(item) }
                            />
                        );
                    })
                }
            </div>
        );
    }

    private _renderNoItems(): JSXElement {

        if (this.renderWhenEmpty) {

            return this.renderWhenEmpty();
        }

        return (
            <div className="empty">
                <p>{ this.emptyMessage ? this.emptyMessage : "There is nothting to display." }</p>
            </div>
        );
    }
}
