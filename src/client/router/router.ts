import { ViewRegistration, ViewRegistrations } from "../../views";
import { InfinityWindow, HistoryAPIEvent } from "../../Globals";

export class Router {

    // === Private === //

    private appContainer: string;
    private views: ViewRegistrations;
    private defaultView: ViewRegistration;
    private routeCallback: (view: ViewRegistration) => void;

    // === Public === //

    public currentPage: ViewRegistration;

    // === Constructor === //

    constructor(appContainer: string, views: ViewRegistrations, routeCallback: (view: ViewRegistration) => void) {

        this.routeCallback = routeCallback;
        this.appContainer = appContainer;
        this.views = views;
        this.defaultView = Object.keys(this.views).map(x => this.views[x]).find(x => x.default);
        this._bindEvents();

        this._firstLoad();
    }

    // === Private === //

    private _bindEvents(): void {

        window.addEventListener("popstate", (e) => this._popState(e));
    }

    private _firstLoad(): void {

        // We are running inside Electron
        if ((window as InfinityWindow).process && (window as InfinityWindow).process.type) {

            this._updateDom(this.defaultView);
        }
        else {

            let path: string = "";

            const idx: number = window.location.pathname.lastIndexOf("/");

            if (idx > -1) {

                path = window.location.pathname.substring(idx + 1);

                if (path === "index.html") {

                    // We are in Cordova and it's loading the default view
                    path = "";
                }
            }

            if (path === "") {

                this._updateDom(this.defaultView);
            }
            else {

                const view: ViewRegistration = Object.keys(this.views).map(x => this.views[x]).find(x => x.uri === path);
                this._updateDom(view);
            }
        }
    }

    private _updateDom(view: ViewRegistration): void {

        const container: HTMLElement = document.getElementById(this.appContainer);

        if (container) {

            this.routeCallback(this.currentPage);
            this.currentPage = view;

            while (container.childNodes.length > 0) {

                container.childNodes[0].parentElement.removeChild(container.childNodes[0]);
            }

            const newView: HTMLElement = document.createElement(view.tag);
            container.appendChild(newView);
            window.document.title = view.title;
        }
        else {

            // tslint:disable-next-line no-console
            console.error("No app container found.");
        }
    }

    private _popState(e: HistoryAPIEvent): void {

        const previousView: ViewRegistration = e.state;

        if (previousView) {

            this._updateDom(previousView);
        }
        else {

            // We somehow lost our state
            this._updateDom(this.defaultView);
        }
    }

    // === Public === //

    public goToPage(view: ViewRegistration): void {

        window.history.pushState(view, "", view.uri);
        this._updateDom(view);
    }
}
