import { IconDefinition } from "./icon";
import { ViewRegistration } from "../views";

export interface TabbedNavigatorButton {

    iconDefinition: IconDefinition;
    text: string;
    view: ViewRegistration;
}
