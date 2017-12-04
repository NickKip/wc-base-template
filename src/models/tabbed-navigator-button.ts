import { IconDefinition } from "models/icon";
import { ViewRegistration } from "views/register";

export interface TabbedNavigatorButton {

    iconDefinition: IconDefinition;
    text: string;
    view: ViewRegistration;
}
