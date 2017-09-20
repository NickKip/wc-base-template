import { BaseComponent } from "components/base/BaseComponent";
import { JSXElement, prop, component } from "components/base";
import { Button } from "components/button/button";
import { ClientEvents } from "events";
import { buildStyles } from "client/utils";

@component({ tag: "wc-popout-menu" })
export class PopoutMenu extends BaseComponent {

    @prop({ type: Array, attribute: false, default: [] })
    buttons: Button[];

    @prop({ type: String, attribute: true, default: "left" })
    direction: string;

    @prop({ type: Boolean, attribute: true, default: false })
    showing: boolean;

    async _init(): Promise<void> {}

    _setupEventListeners(): void {

        this.manager.on(ClientEvents.OpenPopoutMenu, (id: string) => {

            if (id === this.id) {

                this.showing = true;
            }
        });

        this.manager.on(ClientEvents.ClosePopoutMenu, () => this.showing = false);
    }

    componentStyles(): JSXElement {

        return (
            <style>
                { require("./popout-menu.scss") }
            </style>
        );
    }

    componentMarkup(): JSXElement {

        return (
            <div className="container" style={ this._workOutPosition() }>
                {
                    this.buttons.map(x => x)
                }
            </div>
        );
    }

    private _workOutPosition(): CSSStyleDeclaration {

        const parentClientRect: ClientRect = this.parentElement.getBoundingClientRect();

        const halfParentHeight: number = parentClientRect.height / 2;
        const halfParentWidth: number = parentClientRect.width / 2;

        const top: number = parentClientRect.top + halfParentHeight;

        // tslint:disable-next-line no-any
        const style: any = {
            top: `${top}px`
        };

        switch (this.direction) {

            case "left":

                style.transformOrigin = "right 0";
                style.right = `${(window.innerWidth - parentClientRect.right) + halfParentWidth}px`;
                break;

            case "right":

                style.transformOrigin = "left 0";
                style.left = `${parentClientRect.left + halfParentWidth}px`;
                break;
        }

        return buildStyles(style);
    }
}
