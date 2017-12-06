/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_components__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["h"]; });




/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientManager__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clientManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["b"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_client__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__rest_client__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_router_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_rest_client_rest_client__ = __webpack_require__(11);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ClientManager {
    // === Constructor === //
    constructor(name, appContainer, defaultView, config, views) {
        this.events = {};
        // Message Events
        this._messageHandlers = new Map();
        this._messageProcessorQueue = Promise.resolve();
        // === Public === //
        this.isReady = false;
        this.name = name;
        this.config = config;
        this.appContainer = appContainer;
        this.views = views;
        ClientManager.Registrations.set(this.name, this);
        const store = new __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* Store */](this.name);
        this.bootstrap(store);
    }
    static GetRegistration(name) {
        return ClientManager.Registrations.get(name);
    }
    static FireReady() {
        document.dispatchEvent(new CustomEvent("client-manager-ready" /* ClientManagerReady */));
    }
    bootstrap(store) {
        return Promise.resolve()
            .then(() => this._setStore(store))
            .then(() => this._setRestClient())
            .then(() => this._setRouter())
            .then(() => this._bindStartupEvents())
            .then(() => {
            this.isReady = true;
            ClientManager.FireReady();
        });
    }
    _setStore(store) {
        return new Promise(resolve => {
            this.store = store;
            this.store.init().then(() => resolve());
        });
    }
    _setRestClient() {
        return new Promise(resolve => {
            this.rest = new __WEBPACK_IMPORTED_MODULE_2__client_rest_client_rest_client__["a" /* RestClient */](this.config.rest, this.store);
            resolve();
        });
    }
    _setRouter() {
        return new Promise(resolve => {
            this.router = new __WEBPACK_IMPORTED_MODULE_1__client_router_router__["a" /* Router */](this.appContainer, this.views, (view) => this.unloadEvents(view));
            resolve();
        });
    }
    _bindStartupEvents() {
        return new Promise(resolve => {
            document.addEventListener("click", () => this.emit("close-popout-menu" /* ClosePopoutMenu */));
            resolve();
        });
    }
    // === Events === //
    // tslint:disable-next-line no-any
    on(key, handler, global = false) {
        const currPage = this.router.currentPage.tag;
        const events = this.events[key];
        if (events) {
            events.push({
                page: !global ? currPage : null,
                handler: handler
            });
        }
        else {
            this.events[key] = [{
                    page: !global ? currPage : null,
                    handler: handler
                }];
        }
    }
    // tslint:disable-next-line no-any
    emit(key, data) {
        const events = this.events[key];
        if (events) {
            events.map(x => x.handler(data));
        }
    }
    unloadEvents(prevView) {
        Object.keys(this.events).map(x => {
            this.events[x] = this.events[x].filter(e => e.page !== prevView.tag);
        });
    }
    _handleNewWSMessage(message) {
        const handler = this._messageHandlers.get(message.action);
        if (!handler) {
            return;
        }
        this._messageProcessorQueue = this._messageProcessorQueue
            .then(() => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield handler.callHandleMessage(message);
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error("Error processing message", ex);
            }
        }))
            .catch(ex => {
            // tslint:disable-next-line no-console
            console.error("Error processing message", ex);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientManager;

// === Static === //
ClientManager.Registrations = new Map();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = skate;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventArgs {
    constructor() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventArgs;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManager", function() { return __WEBPACK_IMPORTED_MODULE_0__client__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return __WEBPACK_IMPORTED_MODULE_0__client__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getCSSVariable", function() { return __WEBPACK_IMPORTED_MODULE_0__client__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PopoutMenu", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavigator", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TouchList", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEvents", function() { return __WEBPACK_IMPORTED_MODULE_2__events__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return __WEBPACK_IMPORTED_MODULE_2__events__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WSEventArgs", function() { return __WEBPACK_IMPORTED_MODULE_2__events__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__handlers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return __WEBPACK_IMPORTED_MODULE_3__handlers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HttpVerb", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["a"]; });





// import { ClientManager } from "client";
// import { Views } from "views/views";
// window.wc = new ClientManager("wc", "body", "view-login", {}, Views);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Store {
    // === Constructor === //
    constructor(name) {
        this._saveToPersistentQueue = Promise.resolve();
        this.name = name;
        this._db = new window.PouchDB(name);
    }
    // === Public === //
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = yield this._getFromPersistent();
        });
    }
    getFromState(key) {
        return this.state[key] || null;
    }
    // === Message Queue === //
    saveToMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.messageQueue.push(messageEntity);
            return yield this._saveToPersistent();
        });
    }
    removeFromMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const idx = this.state.messageQueue.findIndex(x => x.id === messageEntity.id);
            if (idx > -1) {
                this.state.messageQueue.splice(idx, 1);
                return yield this._saveToPersistent();
            }
            return;
        });
    }
    getMessageQueue() {
        return this.state.messageQueue;
    }
    // === Private === //
    _saveToPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            clearTimeout(this._saveDebouncer);
            this._saveDebouncer = setTimeout(() => {
                if (this._db) {
                    this._saveToPersistentQueue = this._saveToPersistentQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const res = yield this._db.put(this.state);
                            this.state._rev = res.rev;
                        }
                        catch (ex) {
                            throw new Error(ex);
                        }
                    }));
                }
                else {
                    localStorage[this.name] = JSON.stringify(this.state);
                }
            }, 500);
        });
    }
    _getFromPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._db) {
                try {
                    return yield this._db.get(this.name);
                }
                catch (ex) {
                    const state = this._generateInitialState();
                    const res = yield this._db.put(state);
                    state._rev = res.rev;
                    return state;
                }
            }
            else {
                const state = localStorage.getItem(this.name)
                    ? JSON.parse(localStorage.getItem(this.name))
                    : this._generateInitialState();
            }
        });
    }
    _generateInitialState() {
        return {
            _id: this.name,
            _rev: "",
            messageQueue: []
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Store;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Router {
    // === Constructor === //
    constructor(appContainer, views, routeCallback) {
        this.routeCallback = routeCallback;
        this.appContainer = appContainer;
        this.views = views;
        this.defaultView = Object.keys(this.views).map(x => this.views[x]).find(x => x.default);
        this._bindEvents();
        this._firstLoad();
    }
    // === Private === //
    _bindEvents() {
        window.addEventListener("popstate", (e) => this._popState(e));
    }
    _firstLoad() {
        // We are running inside Electron
        if (window.process && window.process.type) {
            this._updateDom(this.defaultView);
        }
        else {
            let path = "";
            const idx = window.location.pathname.lastIndexOf("/");
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
                const view = Object.keys(this.views).map(x => this.views[x]).find(x => x.uri === path);
                this._updateDom(view);
            }
        }
    }
    _updateDom(view) {
        const container = document.getElementById(this.appContainer);
        if (container) {
            this.routeCallback(this.currentPage);
            this.currentPage = view;
            while (container.childNodes.length > 0) {
                container.childNodes[0].parentElement.removeChild(container.childNodes[0]);
            }
            const newView = document.createElement(view.tag);
            container.appendChild(newView);
            window.document.title = view.title;
        }
        else {
            // tslint:disable-next-line no-console
            console.error("No app container found.");
        }
    }
    _popState(e) {
        const previousView = e.state;
        if (previousView) {
            this._updateDom(previousView);
        }
        else {
            // We somehow lost our state
            this._updateDom(this.defaultView);
        }
    }
    // === Public === //
    goToPage(view) {
        window.history.pushState(view, "", view.uri);
        this._updateDom(view);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(3);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class RestClient {
    // === Constructor === //
    constructor(restConfig, store) {
        this.config = restConfig;
        this.store = store;
        this._resetRequestOptions();
    }
    // === Private === //
    _generateQueryString(queryParams) {
        return queryParams.reduce((acc, cur, idx) => {
            let query = "";
            // tslint:disable curly
            if (idx === 0)
                query += "?";
            else
                query += "&";
            // tslint:enable curly
            if (typeof cur.value !== "string") {
                cur.value = JSON.stringify(cur.value);
            }
            query += `${cur.key}=${encodeURIComponent(cur.value)}`;
            return acc += query;
        }, "");
    }
    _resetRequestOptions() {
        this.headers = new Headers();
        this.requestOptions = {
            headers: this.headers
        };
    }
    // tslint:disable-next-line no-any
    _sendMessage(uri, method, queryParams = [], body = {}, addToQueue = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config) {
                throw new Error("Rest client not properly configured.");
            }
            const messageEntity = {
                id: "",
                address: `${this.config.baseUri}${uri}`,
                verb: method,
                queryParams: queryParams,
                body: body,
                attemps: 0,
                lastAttempt: 0
            };
            if (addToQueue) {
                // TODO: Add to message queue
                yield this.store.saveToMessageQueue(messageEntity);
            }
            return yield this._httpRequest(messageEntity);
        });
    }
    // tslint:disable-next-line no-any
    _httpRequest(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let req;
            this.requestOptions = {
                headers: new Headers({
                    "AccessToken": "TODO: Get this from somewhere..."
                })
            };
            if (msg.verb === __WEBPACK_IMPORTED_MODULE_0__models__["a" /* HttpVerb */].GET) {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors"
                }, this.requestOptions);
                msg.address += this._generateQueryString(msg.queryParams);
            }
            else {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors",
                    body: JSON.stringify(msg.body)
                }, this.requestOptions);
            }
            const res = yield fetch(msg.address, req);
            const result = {
                error: !res.ok ? true : false,
                errorMessage: !res.ok ? `${res.status}: ${res.statusText}` : null,
                result: yield res.json()
            };
            // Remove from message queue if message was successful
            if (res.ok) {
                yield this.store.removeFromMessageQueue(msg);
            }
            else {
                ++msg.attemps;
                msg.lastAttempt = new Date().getTime();
            }
            this._resetRequestOptions();
            return result;
        });
    }
    // === Public === //
    processQueuedMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.getMessageQueue().forEach(x => this._httpRequest(x));
        });
    }
    // tslint:disable-next-line no-any
    exampleRequest(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                { key: "filename", value: param }
            ];
            try {
                const result = yield this._sendMessage("your-endpoint-address", __WEBPACK_IMPORTED_MODULE_0__models__["a" /* HttpVerb */].GET, queryParams);
                return result;
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.log("Error:", ex);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RestClient;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Icons = {
    FontAwesome: {
        Bars: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        ChevronRight: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"
            ]
        },
        Cog: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"
            ]
        },
        Cross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
            ]
        },
        CircleCross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M626.857 616.571l-83.429 83.429c-7.429 7.429-18.857 7.429-26.286 0l-78.286-78.286-78.286 78.286c-7.429 7.429-18.857 7.429-26.286 0l-83.429-83.429c-7.429-7.429-7.429-18.857 0-26.286l78.286-78.286-78.286-78.286c-7.429-7.429-7.429-18.857 0-26.286l83.429-83.429c7.429-7.429 18.857-7.429 26.286 0l78.286 78.286 78.286-78.286c7.429-7.429 18.857-7.429 26.286 0l83.429 83.429c7.429 7.429 7.429 18.857 0 26.286l-78.286 78.286 78.286 78.286c7.429 7.429 7.429 18.857 0 26.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            ]
        },
        Info: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-292.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571v-219.429h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v329.143h36.571c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v109.714c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-109.714c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        LeftArrow: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 512v73.143c0 38.857-25.714 73.143-66.857 73.143h-402.286l167.429 168c13.714 13.143 21.714 32 21.714 51.429s-8 38.286-21.714 51.429l-42.857 43.429c-13.143 13.143-32 21.143-51.429 21.143s-38.286-8-52-21.143l-372-372.571c-13.143-13.143-21.143-32-21.143-51.429s8-38.286 21.143-52l372-371.429c13.714-13.714 32.571-21.714 52-21.714s37.714 8 51.429 21.714l42.857 42.286c13.714 13.714 21.714 32.571 21.714 52s-8 38.286-21.714 52l-167.429 167.429h402.286c41.143 0 66.857 34.286 66.857 73.143z"
            ]
        },
        Logout: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"
            ]
        },
        PencilSquareO: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"
            ]
        },
        Plus: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            ]
        },
        Question: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
            ]
        },
        User: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            ]
        },
        Users: {
            viewBox: "0 0 1200 1200",
            paths: [
                "M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
            ]
        },
        Spinner: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1005.714 512c0 272.571-221.143 493.714-493.714 493.714s-493.714-221.143-493.714-493.714c0-248 182.857-453.143 420.571-488.571v130.286c-166.857 33.714-292.571 181.714-292.571 358.286 0 201.714 164 365.714 365.714 365.714s365.714-164 365.714-365.714c0-176.571-125.714-324.571-292.571-358.286v-130.286c237.714 35.429 420.571 240.571 420.571 488.571z"
            ]
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Icons;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpVerb; });
var HttpVerb;
(function (HttpVerb) {
    HttpVerb["GET"] = "get";
    HttpVerb["POST"] = "post";
})(HttpVerb || (HttpVerb = {}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildStyles;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCSSVariable;
// tslint:disable-next-line no-any
function buildStyles(definitions) {
    const element = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}
function getCSSVariable(cssVar) {
    const value = getComputedStyle(document.firstElementChild).getPropertyValue(cssVar);
    return value ? value.trim() : value;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__decorators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__decorators__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseComponent__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__BaseComponent__["a"]; });




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prop__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__prop__["a"]; });




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = component;
// tslint:disable no-any
function component(definition) {
    return (constructor) => {
        const existing = customElements.get(definition.tag);
        if (!existing) {
            customElements.define(definition.tag, constructor);
        }
        return class extends constructor {
            static get is() {
                return definition.tag;
            }
        };
    };
}
// tslint:enable no-any


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

const identityFn = (x) => x;
function prop(property) {
    return function (target, propertyKey) {
        // obtain properties provide by the @prop decorator
        const { type } = property, skPropConfig = __rest(property, ["type"]);
        // parse to find out the type of property
        const configType = parseType(type);
        // reference the skatejs prop function, e.g. prop.string
        const skatePropTypeFn = __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__["prop"][configType] || identityFn;
        // get constructor of element
        const ctor = target.constructor;
        // grab any existing props previously defined
        const existingProps = (ctor.props || {});
        // concatenate all props together
        const newProps = Object.assign({}, existingProps, { [propertyKey]: skatePropTypeFn(skPropConfig) });
        // apply to the current instance of the component
        Object.defineProperty(ctor, "props", {
            configurable: true,
            get() {
                return newProps;
            }
        });
    };
}
function parseType(type) {
    if (typeof type !== "function") {
        return;
    }
    const inst = type();
    if (inst instanceof Array) {
        return "array";
    }
    if (typeof inst === "object") {
        return "object";
    }
    return (typeof inst);
}
// tslint:enable no-any


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_clientManager__ = __webpack_require__(4);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// tslint:disable typedef
// tslint:disable no-any
window.__CTRender = window.skate.h;
class BaseComponent extends __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__["Component"] {
    constructor() {
        super(...arguments);
        this.managerName = "wc";
    }
    // === Private === //
    _bindManager(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            this.manager = __WEBPACK_IMPORTED_MODULE_1__client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
            if (this.manager) {
                this._setupEventListeners();
                yield this._init();
            }
        });
    }
    // === Lifecycle Events === //
    connectedCallback() {
        super.connectedCallback();
        const manager = __WEBPACK_IMPORTED_MODULE_1__client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
        if (!manager || !manager.isReady) {
            document.addEventListener("client-manager-ready" /* ClientManagerReady */, (ev) => this._bindManager(ev));
        }
        else {
            this.manager = manager;
            this._setupEventListeners();
            Promise.resolve().then(() => __awaiter(this, void 0, void 0, function* () { return yield this._init(); }));
        }
    }
    // === Render function === //
    renderCallback() {
        const styles = ensureArray(this.componentStyles());
        const html = ensureArray(this.componentMarkup
            ? this.componentMarkup() || []
            : []);
        return [
            ...styles,
            ...html
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseComponent;

function ensureArray(value) {
    return (value instanceof Array)
        ? value
        : [value];
}
// tslint:enable no-any
// tslint:enable typedef


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__icon_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_button_icon_button__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__icon_button_icon_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pill_pill__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__pill_pill__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popout_menu_popout_menu__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__popout_menu_popout_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_navigator_tab_navigator__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__tab_navigator_tab_navigator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__touch_list_touch_list__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__touch_list_touch_list__["a"]; });










/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let Button = class Button extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._performAction = () => {
            if (this.action) {
                this.action();
            }
        };
    }
    // === Init == //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(22)));
    }
    componentMarkup() {
        const cssClasses = [
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
        const textColorStyles = Object(__WEBPACK_IMPORTED_MODULE_2_client__["b" /* buildStyles */])(!!this.textColor
            ? { color: this.textColor }
            : {});
        return (window.__CTRender("button", { class: cssClasses.join(" "), style: textColorStyles, disabled: this.isWaiting || this.disabled, onClick: e => this._performAction() },
            window.__CTRender("div", { class: "button-content" },
                !this.isWaiting && !!this.icon
                    ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["d" /* Icon */], { icon: this.icon, color: this.iconColor, width: this.iconWidth, height: this.iconHeight, class: "icon" })
                    : null,
                this.isWaiting
                    ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["d" /* Icon */], { icon: __WEBPACK_IMPORTED_MODULE_1_models__["b" /* Icons */].FontAwesome.Spinner, color: this.iconColor, width: this.iconHeight, height: this.iconHeight, spin: true, class: "icon" })
                    : window.__CTRender("div", { class: "label" },
                        window.__CTRender("slot", null)))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "transparent" })
], Button.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "auto" })
], Button.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "large", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "isTransparent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true })
], Button.prototype, "textColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "auto" })
], Button.prototype, "iconColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18px" })
], Button.prototype, "iconWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18px" })
], Button.prototype, "iconHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Object, attribute: false, default: null })
], Button.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: false, default: false })
], Button.prototype, "isWaiting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Function, attribute: false })
], Button.prototype, "action", void 0);
Button = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-button" })
], Button);



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(23);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block; }\n  :host button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    padding: 0.55em 1em;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%; }\n    :host button .button-content {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center; }\n      :host button .button-content .icon {\n        display: block; }\n      :host button .button-content .label {\n        display: block; }\n      :host button .button-content .icon + .label {\n        margin: 0 0 0 5px; }\n    :host button.transparent {\n      background-color: transparent; }\n    :host button.primary {\n      background-color: var(--app-primary-button-color);\n      color: white; }\n    :host button.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font);\n      border: 1px solid var(--app-secondary-button-border); }\n    :host button.popoutDanger {\n      color: var(--app-danger-button-color); }\n    :host button.popoutMenu {\n      background-color: var(--default-popout-button-bg);\n      color: var(--default-popout-button-font); }\n\n:host([class=\"withIcon\"]) button .button-content {\n  justify-content: flex-start;\n  width: 100%; }\n  :host([class=\"withIcon\"]) button .button-content wc-icon {\n    margin: auto 10px auto 5px; }\n  :host([class=\"withIcon\"]) button .button-content .label {\n    margin: auto auto auto 0;\n    width: auto; }\n    :host([class=\"withIcon\"]) button .button-content .label slot {\n      padding-top: 3px;\n      margin: auto 0; }\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Header = class Header extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(25)));
    }
    componentMarkup() {
        let styles = null;
        if (this.bgColor) {
            this.style.backgroundColor = this.bgColor;
            styles = Object(__WEBPACK_IMPORTED_MODULE_1_client__["b" /* buildStyles */])({
                color: Object(__WEBPACK_IMPORTED_MODULE_1_client__["c" /* getCSSVariable */])("--primary-color")
            });
        }
        return (window.__CTRender("div", { className: "container", style: styles },
            window.__CTRender("div", { className: "mainTitle" },
                this._renderIcon(this.leftIcon),
                window.__CTRender("h1", null, this.title),
                this._renderIcon(this.rightIcon)),
            this._renderSubtitle()));
    }
    _renderIcon(icon) {
        return (window.__CTRender("div", { className: "icon" }, icon));
    }
    _renderSubtitle() {
        if (!this.subtitle) {
            return null;
        }
        return (window.__CTRender("div", { className: "subtitle" },
            window.__CTRender("h3", null, this.subtitle)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: false, default: "" })
], Header.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: false, default: "" })
], Header.prototype, "subtitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: false, default: null })
], Header.prototype, "bgColor", void 0);
Header = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-header" })
], Header);



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(26);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  width: 100vw;\n  padding: 0 20px;\n  background-color: var(--primary-color); }\n  :host div.container {\n    color: var(--primary-color-font); }\n    :host div.container div.mainTitle {\n      display: flex;\n      height: 6vh; }\n      :host div.container div.mainTitle h1 {\n        font-size: 18px;\n        text-align: center;\n        font-weight: 600;\n        margin: auto; }\n      :host div.container div.mainTitle div.icon {\n        margin: auto 0;\n        min-width: 40px;\n        cursor: pointer; }\n    :host div.container div.subtitle {\n      height: 6vh;\n      display: flex; }\n      :host div.container div.subtitle h3 {\n        margin: 0 auto;\n        font-weight: 300;\n        font-size: 16px; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Icon = class Icon extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(28)));
    }
    componentMarkup() {
        if (!this.icon) {
            return null;
        }
        const styles = Object(__WEBPACK_IMPORTED_MODULE_1_client__["b" /* buildStyles */])({
            fill: this.color !== "auto"
                ? this.color
                : window.getComputedStyle(this.parentElement).color,
            width: this.width,
            height: this.height
        });
        const viewBox = this.icon.viewBox || "0 0 1024 1024";
        const svgPaths = (this.icon.paths || []);
        return (window.__CTRender("svg", { width: this.width, height: this.height, viewBox: viewBox, style: styles }, svgPaths.map((path, idx) => (window.__CTRender("path", { d: path })))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18" })
], Icon.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18" })
], Icon.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "auto" })
], Icon.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], Icon.prototype, "spin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Object, attribute: false, default: null })
], Icon.prototype, "icon", void 0);
Icon = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-icon" })
], Icon);



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(29);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: flex; }\n  :host svg {\n    margin: auto; }\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let IconButton = class IconButton extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._performAction = () => {
            if (this.action) {
                this.action();
            }
        };
    }
    // === Init == //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(31)));
    }
    componentMarkup() {
        const cssClasses = [
            this.type
        ];
        if (this.isWaiting) {
            cssClasses.push("waiting");
        }
        return (window.__CTRender("button", { class: cssClasses.join(" "), disabled: this.isWaiting || this.disabled, onClick: e => this._performAction() },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["d" /* Icon */], { icon: this.icon, color: this.iconColor, className: "icon", width: this.width, height: this.height }),
            window.__CTRender("slot", null)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "transparent" })
], IconButton.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], IconButton.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "auto" })
], IconButton.prototype, "iconColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Object, attribute: false, default: null })
], IconButton.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18" })
], IconButton.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "18" })
], IconButton.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: false, default: false })
], IconButton.prototype, "isWaiting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Function, attribute: false })
], IconButton.prototype, "action", void 0);
IconButton = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-icon-button" })
], IconButton);



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(32);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  height: 40px;\n  width: 40px;\n  color: inherit; }\n  :host button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: flex; }\n    :host button wc-icon {\n      margin: auto; }\n    :host button.primary {\n      background-color: var(--app-primary-button-color);\n      color: var(--app-primary-button-font); }\n    :host button.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font); }\n    :host button.success {\n      background-color: var(--app-success-button-color);\n      color: var(--app-success-button-color-font); }\n    :host button.danger {\n      background-color: var(--app-danger-button-color);\n      color: var(--app-danger-button-color-font); }\n    :host button.transparent {\n      background-color: transparent; }\n    :host button.transparentLight {\n      background-color: transparent;\n      color: white; }\n    :host button.accentOne {\n      background-color: var(--accent-color-one);\n      color: var(--accent-color-one-font); }\n    :host button.accentTwo {\n      background-color: var(--accent-color-two);\n      color: var(--accent-color-two-font); }\n    :host button.accentThree {\n      background-color: var(--accent-color-three);\n      color: var(--accent-color-three-font); }\n    :host button:disabled {\n      background-color: var(--default-bg-color-dark); }\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let Pill = class Pill extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(34)));
    }
    componentMarkup() {
        if (!this.icon) {
            return null;
        }
        return (window.__CTRender("div", { className: `container ${this.type}` },
            this.icon
                ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["d" /* Icon */], { icon: this.icon, width: "12", height: "12" })
                : null,
            window.__CTRender("span", null,
                window.__CTRender("slot", null))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "transparent" })
], Pill.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Object, attribute: false, default: null })
], Pill.prototype, "icon", void 0);
Pill = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-pill" })
], Pill);



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(35);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  max-height: 30px;\n  min-width: 35px; }\n  :host div.container {\n    display: flex;\n    padding: 5px 8px;\n    font-size: 12px;\n    border-radius: 4px; }\n    :host div.container wc-icon {\n      margin: auto 3px auto 0; }\n    :host div.container span {\n      margin: auto 0; }\n    :host div.container.primary {\n      background-color: var(--app-primary-button-color);\n      color: var(--app-primary-button-font); }\n    :host div.container.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font);\n      border: 1px solid var(--app-secondary-button-border); }\n    :host div.container.transparent {\n      background-color: transparent; }\n    :host div.container.danger {\n      background-color: var(--app-danger-button-color);\n      color: var(--app-danger-button-color-font); }\n    :host div.container.accentOne {\n      background-color: var(--accent-color-one);\n      color: var(--accent-color-one-font); }\n    :host div.container.accentTwo {\n      background-color: var(--accent-color-two);\n      color: var(--accent-color-two-font); }\n    :host div.container.accentThree {\n      background-color: var(--accent-color-three);\n      color: var(--accent-color-three-font); }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoutMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let PopoutMenu = class PopoutMenu extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on("open-popout-menu" /* OpenPopoutMenu */, (id) => {
            if (id === this.id) {
                this.showing = true;
            }
        });
        this.manager.on("close-popout-menu" /* ClosePopoutMenu */, () => this.showing = false);
    }
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(37)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container", style: this._workOutPosition() }, this.buttons.map(x => x)));
    }
    _workOutPosition() {
        const parentClientRect = this.parentElement.getBoundingClientRect();
        const halfParentHeight = parentClientRect.height / 2;
        const halfParentWidth = parentClientRect.width / 2;
        const top = parentClientRect.top + halfParentHeight;
        // tslint:disable-next-line no-any
        const style = {
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
        return Object(__WEBPACK_IMPORTED_MODULE_1_client__["b" /* buildStyles */])(style);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Array, attribute: false, default: [] })
], PopoutMenu.prototype, "buttons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: true, default: "left" })
], PopoutMenu.prototype, "direction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: true, default: false })
], PopoutMenu.prototype, "showing", void 0);
PopoutMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-popout-menu" })
], PopoutMenu);



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(38);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host div.container {\n  position: fixed;\n  padding: 0 15px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  background-color: var(--default-menu-bg, white);\n  visibility: hidden;\n  transform: scale(0, 0);\n  will-change: transform;\n  transition: all 130ms cubic-bezier(0.77, 0, 0.175, 1);\n  transform-origin: right 0;\n  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);\n  -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3); }\n  :host div.container wc-button {\n    height: 60px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n    color: #8f98a3; }\n  :host div.container wc-button:last-child {\n    border: none; }\n\n:host([showing]) div.container {\n  visibility: visible;\n  transform: scale(1, 1); }\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let TabNavigator = class TabNavigator extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    _tabRowClick(view) {
        this.manager.router.goToPage(view);
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(40)));
    }
    componentMarkup() {
        if (!this.tabs || !this.tabs.length) {
            return null;
        }
        return (window.__CTRender("div", { className: "container" }, this.tabs.map(x => this._renderTab(x.iconDefinition, x.text, x.view))));
    }
    _renderTab(icon, text, view) {
        if (!this.manager) {
            return null;
        }
        const selected = view.tag === this.manager.router.currentPage.tag ? "selected" : "";
        return (window.__CTRender("div", { className: `tab ${selected}`, onClick: () => this._tabRowClick(view) },
            window.__CTRender("div", { className: "icon" },
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["d" /* Icon */], { icon: icon })),
            window.__CTRender("div", { className: "text" }, text)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Array, attribute: false, detault: [] })
], TabNavigator.prototype, "tabs", void 0);
TabNavigator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-tab-navigator" })
], TabNavigator);



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(41);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host div.container {\n  display: flex;\n  flex: 0 0;\n  height: 8vh;\n  background-color: var(--default-bg-color-dark);\n  border-top: 1px solid var(--default-border-color); }\n  :host div.container div.tab {\n    flex: 1 1 50%;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    color: var(--default-font-color-light); }\n    :host div.container div.tab.selected div.icon, :host div.container div.tab.selected div.text {\n      color: var(--primary-color); }\n    :host div.container div.tab div.icon {\n      margin: auto auto 2px auto; }\n    :host div.container div.tab div.text {\n      margin: auto 0;\n      text-align: center;\n      font-size: 12px; }\n\n@media screen and (max-height: 450px) {\n  :host {\n    display: none; } }\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_slideReveal__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let TouchList = class TouchList extends __WEBPACK_IMPORTED_MODULE_0_components__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    _rowClick(e, item) {
        // This is used in case we have lists within lists
        e.stopImmediatePropagation();
        if (this.rowClick) {
            this.rowClick(item);
        }
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(44)));
    }
    componentMarkup() {
        if (!this._renderRow) {
            return null;
        }
        return (window.__CTRender("div", { className: "container" }, this.items && this.items.length > 0
            ? this.items.map(x => this._renderRow(x))
            : this.hideEmptyMessage ? null : this._renderNoItems()));
    }
    _renderRow(item) {
        const offset = this.backgroundButtons
            ? this.backgroundButtons.length * 15
            : -1;
        return (window.__CTRender("div", { className: "row" },
            window.__CTRender("div", { className: "foreground", style: Object(__WEBPACK_IMPORTED_MODULE_1_client__["b" /* buildStyles */])({ transform: "translateX(0vw)" }), onClick: (e) => this._rowClick(e, item), ontouchmove: this.slideEnabled ? (e) => Object(__WEBPACK_IMPORTED_MODULE_2_client_slideReveal__["a" /* slideToReveal */])(e, offset) : null, ontouchend: this.slideEnabled ? (e) => Object(__WEBPACK_IMPORTED_MODULE_2_client_slideReveal__["b" /* slideToRevealEnd */])(e, offset) : null }, this.renderRow(item)),
            this.slideEnabled
                ? this._renderBgButtons(item)
                : null));
    }
    _renderBgButtons(item) {
        if (!this.backgroundButtons || this.backgroundButtons.length === 0) {
            return null;
        }
        const styles = Object(__WEBPACK_IMPORTED_MODULE_1_client__["b" /* buildStyles */])({
            width: `${this.backgroundButtons.length * 15}vw`
        });
        return (window.__CTRender("div", { className: "background", style: styles }, this.backgroundButtons.map(x => {
            return (window.__CTRender(__WEBPACK_IMPORTED_MODULE_0_components__["b" /* Button */], { icon: x.icon, iconWidth: x.width, iconHeight: x.height, iconColor: x.iconColor, action: () => x.action(item) }));
        })));
    }
    _renderNoItems() {
        if (this.renderWhenEmpty) {
            return this.renderWhenEmpty();
        }
        return (window.__CTRender("div", { className: "empty" },
            window.__CTRender("p", null, this.emptyMessage ? this.emptyMessage : "There is nothting to display.")));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Array, attribute: false, default: [] })
], TouchList.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "renderRow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "rowClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Array, attribute: false, default: [] })
], TouchList.prototype, "backgroundButtons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: false, default: true })
], TouchList.prototype, "slideEnabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "renderWhenEmpty", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: Boolean, attribute: false, default: false })
], TouchList.prototype, "hideEmptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: false, default: null })
], TouchList.prototype, "emptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["k" /* prop */])({ type: String, attribute: false, default: "" })
], TouchList.prototype, "redraw", void 0);
TouchList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_components__["j" /* component */])({ tag: "wc-touch-list" })
], TouchList);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slideToReveal;
/* harmony export (immutable) */ __webpack_exports__["b"] = slideToRevealEnd;
/* unused harmony export slideAwayMotion */
/* unused harmony export slideAwayEnd */
// tslint:disable
class TouchTracker {
}
/* unused harmony export TouchTracker */

// This determines the movement speed of the element being dragged. Increase this number to make it faster or lower to make slower
TouchTracker.Accelerator = 2.5;
// Resets current state
TouchTracker.Reset = () => {
    delete TouchTracker.LastTouchStartX;
    delete TouchTracker.LastTouchStartY;
    delete TouchTracker.LastTouchStartTime;
    delete TouchTracker.LastTouchMoveX;
    delete TouchTracker.LastTouchMoveY;
};
TouchTracker.NumMatch = /-?\d+/;
TouchTracker.X = ["clientX"];
TouchTracker.Y = ["clientY"];
TouchTracker.GetNumberValue = (str) => {
    const res = str.match(TouchTracker.NumMatch);
    if (res) {
        return parseInt(res[0]);
    }
    else
        return null;
};
TouchTracker.CheckIfFirstTouch = (x, y) => {
    if (!TouchTracker.LastTouchStartX) {
        console.log("First X detected");
        TouchTracker.LastTouchStartX = x;
    }
    if (!TouchTracker.LastTouchStartY) {
        console.log("First Y detected");
        TouchTracker.LastTouchStartY = y;
    }
    TouchTracker.LastTouchStartTime = new Date().getTime();
};
function slideToReveal(e, offset, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const maxOffset = 0 - (offset + 1);
    const target = e.currentTarget;
    const currPos = target.style.transform;
    let newPos = 0;
    if (currPos) {
        newPos = TouchTracker.GetNumberValue(currPos);
    }
    // if (newPos > maxOffset) {
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    const diffX = (TouchTracker.LastTouchMoveX || TouchTracker.LastTouchStartX) - e.changedTouches[0].clientX;
    const diffY = (TouchTracker.LastTouchMoveY || TouchTracker.LastTouchStartY) - e.changedTouches[0].clientY;
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
    if (tracking === "x") {
        // Moving left
        if (diffX > 0) {
            newPos--;
            if (newPos > maxOffset) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
        else {
            newPos++;
            if (newPos < 1) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
    }
    else if (tracking === "y") {
        // Moving down
        if (diffY > 1) {
            newPos = newPos - (1 * TouchTracker.Accelerator);
            //--newPos;
            target.style.transform = `translateY(${newPos}vh)`;
        }
        else if (diffY < -0.5) {
            newPos = newPos + (1 * TouchTracker.Accelerator);
            // ++newPos;
            if (newPos > 0.5)
                newPos = 0;
            target.style.transform = `translateY(${newPos}vh)`;
        }
    }
    // tslint:disable
    // console.log(`CurrPos: ${currPos}, DiffX: ${diffX}, DiffY: ${diffY}, New Pos: ${newPos}`);
    // }
}
function slideToRevealEnd(e, maxOffset, axis = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const target = e.currentTarget;
    const currLeft = target.style.transform;
    let newLeft;
    if (currLeft) {
        newLeft = TouchTracker.GetNumberValue(target.style.transform);
    }
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        if (velocity > 1.2) {
            target.style.transform = `translateX(0vw)`;
        }
        else if (velocity < -1.2) {
            target.style.transform = `translateX(-${maxOffset}vw)`;
        }
        else {
            const halfWay = Math.round(maxOffset / 2);
            if (newLeft < -halfWay) {
                // Snap to reveal
                target.style.transform = `translateX(-${maxOffset}vw)`;
            }
            else {
                // Snap to reset
                target.style.transform = "translateX(0vw)";
            }
        }
    }
    TouchTracker.Reset();
}
function calculateVelocityOfCurrentTouch() {
    const finalPos = TouchTracker.LastTouchMoveX;
    const initialPos = TouchTracker.LastTouchStartX;
    const finalTime = new Date().getTime();
    const initialTime = TouchTracker.LastTouchStartTime;
    const pos = finalPos - initialPos;
    const time = finalTime - initialTime;
    return pos / time;
}
function slideAwayMotion(e, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
}
function slideAwayEnd(e, leftAction, rightAction, axis = "x", threshold = 5) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        // tslint:disable-next-line no-console
        console.log("Vel:", velocity);
        if (velocity > threshold && rightAction) {
            rightAction();
        }
        else if (velocity < -threshold && leftAction) {
            leftAction();
        }
    }
    TouchTracker.Reset();
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(45);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: flex;\n  flex: 1 1; }\n  :host div.container {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n    :host div.container div.row {\n      position: relative;\n      height: auto; }\n      :host div.container div.row div.background {\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: 0;\n        height: 100%;\n        display: flex;\n        background-color: #f2f2f2; }\n        :host div.container div.row div.background ct-button {\n          margin: auto;\n          height: 100%;\n          width: 100%; }\n      :host div.container div.row div.foreground {\n        display: flex;\n        flex: 1 0 auto;\n        background-color: var(--default-bg-color);\n        width: 100%;\n        position: relative;\n        z-index: 100; }\n    :host div.container div.empty {\n      margin: auto;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      flex: 1;\n      font-size: 14px;\n      padding: 20px 0; }\n      :host div.container div.empty p {\n        margin: auto auto 20px auto;\n        text-align: center;\n        width: 100%; }\n      :host div.container div.empty wc-button {\n        min-width: 60%;\n        margin: 0 auto auto auto; }\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_args__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["b"]; });
var ClientEvents;
(function (ClientEvents) {
    // Client Manager Ready
    ClientEvents["ClientManagerReady"] = "client-manager-ready";
    // Popout Menu Events
    ClientEvents["OpenPopoutMenu"] = "open-popout-menu";
    ClientEvents["ClosePopoutMenu"] = "close-popout-menu";
})(ClientEvents || (ClientEvents = {}));



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_args__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ws_event_args__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ws_event_args__["a"]; });




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events_event_args_event_args__ = __webpack_require__(6);

class WSEventArgs extends __WEBPACK_IMPORTED_MODULE_0_events_event_args_event_args__["a" /* EventArgs */] {
    // tslint:disable-next-line no-any
    constructor(action, payload) {
        super();
        this.action = action;
        this.payload = payload;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WSEventArgs;



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_handler__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base_handler__["a"]; });

function get(clientManager) {
    return [];
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class BaseHandler {
    // === Constructor === //
    constructor(manager) {
        // === Public Props === //
        // public messageType: string = null;
        this.eventType = [];
        this.filters = [];
        this.manager = manager;
    }
    // === Public === //
    callHandleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleMessage(message);
        });
    }
    callHandleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleEvent(eventType, eventData);
        });
    }
    registerFilter(filter) {
        if (!this.filters.includes("filter")) {
            this.filters.push(filter);
        }
    }
    unregisterFilter(filter) {
        const remove = this.filters.findIndex(x => x === filter);
        if (remove > -1) {
            this.filters.splice(remove, 1);
        }
    }
    clearAllFilters() {
        this.filters = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseHandler;



/***/ })
/******/ ]);