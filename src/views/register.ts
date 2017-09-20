// === Types === //

export type ViewRegistrations = {

    [key: string]: ViewRegistration;
};

export type ViewRegistration = {

    // HTML tag name for the view. This must have at least one hyphen in it, e.g. my-html-tag
    tag: string;
    // The document title to be displayed for this view
    title: string;
    // The uri to be used / displayed in the url bar
    uri: string;
    // Specify whether this view is the default. If set, this view will be loaded if no other view matches the route
    default?: boolean;
    // Specify whether this view requires auth. If set, view won't be loaded unless current session is authorised
    auth?: boolean;
};

// === View Registration === //

export const Views: ViewRegistrations = {

    Home: { tag: "view-home", title: "Home", uri: "home" },
    Login: { tag: "view-login", title: "Login", uri: "", default: true }
};
