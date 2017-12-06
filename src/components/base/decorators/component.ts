import { JSXElement } from "../";
import { BaseComponent } from "../BaseComponent";

export interface ComponentDefinition {

    tag: string;
}

// tslint:disable no-any

export function component(definition: ComponentDefinition): Function {

    return <T extends {new(...args: any[]): {}}>(constructor: T) => {

        const existing: HTMLElement = customElements.get(definition.tag);
        if (!existing) {

            customElements.define(definition.tag, constructor);
        }

        return class extends constructor {

            static get is(): string {

                return definition.tag;
            }
        };
    };
}

// tslint:enable no-any
