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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_header_header__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return __WEBPACK_IMPORTED_MODULE_0_components_header_header__["a"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_base_BaseComponent__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Header extends __WEBPACK_IMPORTED_MODULE_0_components_base_BaseComponent__["a" /* BaseComponent */] {
    static get is() {
        return "bot-header";
    }
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(6)));
    }
    componentMarkup() {
        return (window.__CTRender("div", null,
            window.__CTRender("h1", null, "Gaming Weekend Stats 9")));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;

Header.register();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_clientManager__ = __webpack_require__(4);
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
        // @prop({ type: string, attribute: true, default: "nktest" })
        this.managerName = "nktemp";
    }
    // === Static functions === //
    static register() {
        if (this.is === null) {
            // tslint:disable-next-line no-console
            console.error("Could not register component, please ensure that it has a static is property");
            return;
        }
        const existing = customElements.get(this.is);
        if (!existing) {
            customElements.define(this.is, this);
        }
    }
    // === Private === //
    _bindManager(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            this.manager = __WEBPACK_IMPORTED_MODULE_1_client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
            this._setupEventListeners();
            yield this._init();
        });
    }
    // === Lifecycle Events === //
    connectedCallback() {
        super.connectedCallback();
        const manager = __WEBPACK_IMPORTED_MODULE_1_client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
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

BaseComponent.is = null;
function ensureArray(value) {
    return (value instanceof Array)
        ? value
        : [value];
}
// tslint:enable no-any
// tslint:enable typedef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = skate;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store_store__ = __webpack_require__(5);

class ClientManager {
    // === Constructor === //
    constructor(name) {
        // Todo: proper type defs
        this.events = {};
        // === Public === //
        this.isReady = false;
        this.name = name;
        ClientManager.Registrations.set(this.name, this);
        const store = new __WEBPACK_IMPORTED_MODULE_0_store_store__["a" /* Store */](this.name);
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
    // === Events === //
    // tslint:disable-next-line no-any
    on(key, handler) {
        const events = this.events[key];
        if (events) {
            events.push(handler);
        }
        else {
            this.events[key] = [handler];
        }
    }
    // tslint:disable-next-line no-any
    emit(key, data) {
        const events = this.events[key];
        if (events) {
            events.map(x => x(data));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientManager;

// === Static === //
ClientManager.Registrations = new Map();
window.ClientManager = ClientManager;
window.mp = new ClientManager("mp");


/***/ }),
/* 5 */
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
            _rev: ""
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Store;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(7);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100vw;\n  height: 40px;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n:host div {\n  display: flex;\n  height: 100%; }\n\n:host h1 {\n  color: white;\n  font-size: 18px;\n  margin: auto; }\n", ""]);

// exports


/***/ }),
/* 8 */
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


/***/ })
/******/ ]);