define(() => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 425
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.oseditor-nmzzpp1hty {
    & .dropdown.icon {
        width: 2em;
        height: 2em;
        background-color: turquoise;
        transform: rotate(-90deg);

        &::before {
            content: "▼";
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }

    & .active > .dropdown.icon {
        transform: rotate(0deg);
    }

    & .content {
        background-color: #eee;
    }

    & .object-component {
        /* border: solid 1px #f00; */
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & .title {
            background-color: #000;
            color: #fff;
            padding: 0.25em;
        }

        & .content {
            &.active {
                display: block;
            }
        }
    }

    & .array-component {
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & .title {
            background-color: #000;
            color: #fff;
            padding: 0.25em;
        }

        & .items-container {
            display: flex;
            flex-direction: column;
            gap: 0.5em;

            & .array-item {
                border-bottom: solid 1px #000;
            }
        }
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 166
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(425);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ 415
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(237), exports);
__exportStar(__webpack_require__(626), exports);
__exportStar(__webpack_require__(546), exports);
__exportStar(__webpack_require__(667), exports);
__exportStar(__webpack_require__(460), exports);
__exportStar(__webpack_require__(591), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(335), exports);
__exportStar(__webpack_require__(245), exports);
__exportStar(__webpack_require__(343), exports);
__exportStar(__webpack_require__(302), exports);


/***/ },

/***/ 21
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = exports.PageType = void 0;
exports.encodeParams = encodeParams;
exports.decodeParams = decodeParams;
const disposable_1 = __webpack_require__(626);
const dom_1 = __webpack_require__(546);
const value_1 = __webpack_require__(667);
const log_1 = __webpack_require__(394);
var PageType;
(function (PageType) {
    PageType[PageType["Normal"] = 0] = "Normal";
    PageType[PageType["Background"] = 1] = "Background";
    PageType[PageType["Overlay"] = 2] = "Overlay";
})(PageType || (exports.PageType = PageType = {}));
function encodeParams(map) {
    const arr = [];
    map.forEach((value, key) => {
        arr.push(`${encodeURI(key)}=${encodeURI(value)}`);
    });
    return arr.join("&");
}
function decodeParams(value) {
    const arr = value.split("&");
    const params = new Map();
    arr.forEach((v) => {
        const kv = v.split("=");
        if (kv.length === 2) {
            params.set(decodeURI(kv[0]), decodeURI(kv[1]));
        }
    });
    return params;
}
const FOCUSABLE_ELEMENT_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
class App extends disposable_1.Disposable {
    appDiv;
    appContainer;
    backgroundContainer;
    pageContainer;
    overflowContainer;
    modalsContainer;
    _services = new Map();
    modals = [];
    pagesConstructors = [];
    backgroundPageConstructors = [];
    overflowPageConstructors = [];
    _options;
    _parent;
    store;
    config;
    backgroundPages = [];
    overflowPages = [];
    _currentPage;
    pageId = new value_1.ValueStoreRaw(null);
    _isFocusPageLocked = false;
    isFullscreen = new value_1.ValueStoreRaw(false);
    static create(parent, store, config, options = {}) {
        return new App(parent, store, config, options);
    }
    constructor(parent, store, config, options = {}) {
        super();
        log_1.log.debug("Greetings from DuctTape Engine! 🥳");
        this.store = store;
        this.config = config;
        this._options = options;
        this._parent = parent;
        this.appDiv = (0, dom_1.create)("div", this).class(options.appClassName ?? [])
            .mount(this._parent);
        this.appContainer = (0, dom_1.create)("div", this).class(options.appContainerClassName ?? [])
            .mount(this.appDiv);
        if (options.backgroundContainerEnabled === true) {
            this.backgroundContainer = (0, dom_1.create)("div", this)
                .class(options.backgroundContainerClassName ?? [])
                .mount(this.appContainer);
        }
        this.pageContainer = (0, dom_1.create)("div", this).class(options.pageContainerClassName ?? [])
            .mount(this.appContainer);
        if (options.overflowContainerEnabled === true) {
            this.overflowContainer = (0, dom_1.create)("div", this).class(options.overflowContainerClassName ?? [])
                .mount(this.appContainer);
        }
        this.modalsContainer = (0, dom_1.create)("div", this).class(options.modalContainerClassName ?? [])
            .style("display", "none")
            .mount(this.appContainer);
        document.addEventListener("fullscreenchange", () => {
            const isFullscreen = !!document.fullscreenElement;
            this.isFullscreen.set(isFullscreen);
        });
    }
    dispose() {
        this.removeAllModals();
        if (this.backgroundPages.length > 0) {
            this.backgroundPages.forEach(page => page.dispose());
            this.backgroundPages = [];
        }
        if (this.overflowPages.length > 0) {
            this.overflowPages.forEach(page => page.dispose());
            this.overflowPages = [];
        }
        if (this._currentPage) {
            this._currentPage.dispose();
        }
        this.pageId.dispose();
        super.dispose();
    }
    fullscreen() {
        this.appDiv.element.requestFullscreen();
    }
    exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
    toggleFullscreen() {
        if (document.fullscreenElement) {
            this.exitFullscreen();
        }
        else {
            this.fullscreen();
        }
    }
    get parent() {
        return this._parent;
    }
    findPageByName(name) {
        for (const pageConstructor of this.pagesConstructors) {
            if (pageConstructor.name === name) {
                return pageConstructor;
            }
        }
        log_1.log.error(`Page with name "${name}" not found.`);
        return undefined;
    }
    registerPage(pageConstructor, type = PageType.Normal) {
        if (type === PageType.Background) {
            if (this._options.backgroundContainerEnabled !== true || !this.backgroundContainer) {
                log_1.log.error("Background container is not enabled in App options.");
                return;
            }
            for (const page of this.backgroundPages) {
                if (pageConstructor === page.constructor) {
                    log_1.log.error(`Background page "${pageConstructor.name}" is already added.`);
                    return;
                }
            }
            this.backgroundPageConstructors.push(pageConstructor);
        }
        else if (type === PageType.Overlay) {
            if (this._options.overflowContainerEnabled !== true || !this.overflowContainer) {
                log_1.log.error("Overflow container is not enabled in App options.");
                return;
            }
            for (const page of this.overflowPageConstructors) {
                if (pageConstructor === page) {
                    log_1.log.error(`Overflow page "${pageConstructor.name}" is already added.`);
                    return;
                }
            }
            this.overflowPageConstructors.push(pageConstructor);
        }
        else {
            if (this.pagesConstructors.includes(pageConstructor)) {
                log_1.log.error(`Page "${pageConstructor.name}" is already registered.`);
                return;
            }
            this.pagesConstructors.push(pageConstructor);
        }
    }
    registerService(service) {
        if (this._services.has(service.name)) {
            throw new Error(`Service "${service.name}" is already registered.`);
        }
        this._services.set(service.name, service);
        return this;
    }
    get currentPage() {
        return this._currentPage;
    }
    saveAndLockPageFocusableElements() {
        //find all focusable elements
        const focusableElements = this.getPageFocusableElements();
        focusableElements?.forEach(el => {
            el.setAttribute("data-original-tabindex", el.getAttribute("tabindex") || "0");
            el.setAttribute("tabindex", "-1");
        });
        const overflowFocusableElements = this.getOverflowFocusableElements();
        overflowFocusableElements?.forEach(el => {
            el.setAttribute("data-original-tabindex", el.getAttribute("tabindex") || "0");
            el.setAttribute("tabindex", "-1");
        });
        this._isFocusPageLocked = true;
    }
    restorePageFocusableElements() {
        const focusableElements = this.currentPage?.element.querySelectorAll('[data-original-tabindex]');
        focusableElements?.forEach(el => {
            const originalTabIndex = el.getAttribute("data-original-tabindex");
            if (originalTabIndex) {
                el.setAttribute("tabindex", originalTabIndex);
                el.removeAttribute("data-original-tabindex");
            }
        });
        const overflowFocusableElements = this.overflowContainer?.element.querySelectorAll('[data-original-tabindex]');
        overflowFocusableElements?.forEach(el => {
            const originalTabIndex = el.getAttribute("data-original-tabindex");
            if (originalTabIndex) {
                el.setAttribute("tabindex", originalTabIndex);
                el.removeAttribute("data-original-tabindex");
            }
        });
        this._isFocusPageLocked = false;
    }
    async navigate(to, params = new Map()) {
        // const newHash = `${to}@${encodeParams(new Map([...params, ...this.getData()]))}`;
        // if (newHash === this.lastHash) return;
        // this.lastHash = newHash;
        const nextPage = this.pagesConstructors.includes(to) ? to : undefined;
        if (!nextPage) {
            console.warn(`Page with name "${to.name}" not found.`);
            throw new Error(`Unknown page "${to.name}". Did you forget to register it?`);
        }
        this.removeAllModals();
        // setProgress(0);
        // loader?.classList.remove("none");
        // pages.style.setProperty("visibility", "hidden");
        if (this._currentPage) {
            await this._currentPage.unload();
            this._currentPage.dispose();
            if (this.pageContainer.element.children.length > 0) {
                const className = this._currentPage.constructor.name;
                console.warn(`Detect memory leak in class "${className}". Probably the class "${className}" left a content in the main container. ${this.appDiv.element.innerHTML}`);
                this.appDiv.element.textContent = "";
            }
            this._currentPage = undefined;
            this.pageId.set(null);
        }
        // const params: Map<string, string> = new Map();
        // for (const s of params) {
        //   const p = s.split("=");
        //   params.set(p[0], p[1] ?? p[0]);
        // }
        this._currentPage = new nextPage(this, this.store, this.config);
        await this._currentPage.load();
        this._currentPage.mount(this.pageContainer);
        this.pageId.set(to);
        this.appDiv.element.setAttribute("data-page", to.name);
        // loader?.classList.add("none");
        // pages.style.removeProperty("visibility");
        // if (location.hash.slice(1) !== newHash) {
        //     location.hash = newHash;
        // }
    }
    // TODO: zachowanie specyficzne, przenieść do rozszerzenia
    // navigateFromHash(): void {
    //     const path = location.hash.slice(1);
    //     const params = path.split("@");
    //     const to = params[0] ?? "";
    //     const data = params[1] ?? "";
    //     this.navigate(to, decodeParams(data));
    // }
    // getData(): Map<string, string> {
    //     const path = location.hash.slice(1);
    //     const params = path.split("@");
    //     const data = params[1] ?? "";
    //     return decodeParams(data);
    // }
    runViewportObserver() {
        const appHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--app-height", `${window.innerHeight}px`);
        };
        window.addEventListener("resize", appHeight);
        appHeight();
    }
    async setup() {
        for (const [, service] of this._services) {
            await service.load();
        }
        for (const [, service] of this._services) {
            await service.run();
        }
        // Setup background pages
        if (this.backgroundContainer) {
            for (const pageConstructor of this.backgroundPageConstructors) {
                const page = new pageConstructor(this, this.store, this.config);
                page.mount(this.backgroundContainer);
                this.backgroundPages.push(page);
                await page.load();
            }
        }
        // Setup overflow pages
        if (this.overflowContainer) {
            for (const pageConstructor of this.overflowPageConstructors) {
                const page = new pageConstructor(this, this.store, this.config);
                page.mount(this.overflowContainer);
                this.overflowPages.push(page);
                await page.load();
            }
        }
    }
    async addModal(modal) {
        if (this.modals.includes(modal)) {
            return;
        }
        if (this.modals.length > 0) {
            this.modals[this.modals.length - 1].element.style.display = "none";
        }
        this.modals.push(modal);
        modal.mount(this.modalsContainer);
        await modal.load();
        this.updateModals();
        await modal.show();
        // focus first focusable element in modal
        const focusableElements = modal.element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
    async removeModal(modal) {
        if (!this.modals.includes(modal)) {
            return;
        }
        this.modals.splice(this.modals.indexOf(modal), 1);
        await modal.close();
        await modal.unload();
        modal.dispose();
        if (this.modals.length > 0) {
            this.modals[this.modals.length - 1].element.style.display = "flex";
        }
        this.updateModals();
        if (this.modals.length > 0) {
            const focusableElements = this.modals[this.modals.length - 1].element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }
        else {
            // focus current page
            const focusableElements = this.getPageFocusableElements();
            if (focusableElements && focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }
    }
    removeAllModals() {
        let modal;
        while ((modal = this.modals.pop())) {
            modal.dispose();
        }
        this.updateModals();
    }
    getPageFocusableElements() {
        return this.currentPage?.element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
    }
    getOverflowFocusableElements() {
        return this.overflowContainer?.element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
    }
    updateModals() {
        if (this.modals.length > 0) {
            this.modalsContainer.element.style.display = "flex";
            if (!this._isFocusPageLocked) {
                this.saveAndLockPageFocusableElements();
            }
        }
        else {
            this.modalsContainer.element.style.display = "none";
            if (this._isFocusPageLocked) {
                this.restorePageFocusableElements();
            }
        }
    }
}
exports.App = App;


/***/ },

/***/ 237
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isDefined = isDefined;
exports.hasOwnProperty = hasOwnProperty;
exports.hasOwnFunction = hasOwnFunction;
exports.isEmpty = isEmpty;
exports.isTrue = isTrue;
exports.isFalse = isFalse;
exports.mergeDeep = mergeDeep;
function isObject(value) {
    return (typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        !(value instanceof RegExp) &&
        !(value instanceof Date));
}
function isFunction(value) {
    return value instanceof Function;
}
function isDefined(value) {
    return value !== undefined;
}
function hasOwnProperty(value, name) {
    return typeof value === 'object' && Object.hasOwn(value, name);
}
function hasOwnFunction(value, name) {
    return (isObject(value) && isFunction(value[name]));
}
function isEmpty(value) {
    if (value === undefined)
        return true;
    if (value === '')
        return true;
    if (value === null)
        return true;
    if (value === 0)
        return true;
    return false;
}
function isTrue(value) {
    if (value === true)
        return true;
    if (value === 'true')
        return true;
    if (value === 'yes')
        return true;
    if (value === 'on')
        return true;
    if (value === 't')
        return true;
    if (value === 1)
        return true;
    if (value === '1')
        return true;
    return false;
}
function isFalse(value) {
    if (value === false)
        return true;
    if (value === 'false')
        return true;
    if (value === 'no')
        return true;
    if (value === 'off')
        return true;
    if (value === 'f')
        return true;
    if (value === 0)
        return true;
    if (value === '0')
        return true;
    return false;
}
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}


/***/ },

/***/ 626
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DummyDisposable = exports.Disposable = void 0;
exports.createDisposeFn = createDisposeFn;
const common_1 = __webpack_require__(237);
function createDisposeFn(fn) {
    return fn;
}
class Disposable {
    _disposed;
    _disposables = new Map();
    constructor() {
        this._disposed = false;
    }
    dispose() {
        if (this._disposed)
            return;
        try {
            const disposables = Array.from(this._disposables.entries()).reverse();
            for (const [, fn] of disposables) {
                try {
                    fn();
                }
                catch (e) {
                    console.error(e);
                }
            }
            this._disposables.clear();
        }
        finally {
            this._disposed = true;
        }
    }
    get disposed() {
        return this._disposed;
    }
    register(o) {
        if (this._disposables.has(o)) {
            console.warn(`Cannot register ${o?.constructor?.name ?? o}. This object is already registered.`);
            return o;
        }
        if ((0, common_1.isObject)(o)) {
            if ((0, common_1.hasOwnFunction)(o, 'dispose')) {
                this._disposables.set(o, () => o.dispose());
            }
            else if ((0, common_1.hasOwnFunction)(o, 'destroy')) {
                this._disposables.set(o, () => o.destroy());
            }
            else if ((0, common_1.hasOwnFunction)(o, 'remove')) {
                this._disposables.set(o, () => o.remove());
            }
            else {
                console.warn(`The object ${o?.constructor?.name ?? o} has an unknown release function!`);
            }
        }
        else if ((0, common_1.isFunction)(o)) {
            this._disposables.set(o, o);
        }
        else {
            console.warn(`Cannot register ${o}. This object does not have a release function!`);
        }
        return o;
    }
    unregister(o) {
        if (this._disposables.has(o)) {
            this._disposables.delete(o);
        }
        else {
            console.warn("Object ${o} doesn't exist in register.");
        }
    }
}
exports.Disposable = Disposable;
class DummyDisposable extends Disposable {
    constructor() {
        super();
    }
}
exports.DummyDisposable = DummyDisposable;


/***/ },

/***/ 546
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOMNode = void 0;
exports.create = create;
const disposable_1 = __webpack_require__(626);
const value_1 = __webpack_require__(667);
// export const SELECTOR_REGEX = /([\w-]+)?(#([\w-]+))?((\.([\w-]+))*)/;
// export enum DOMNamespace {
//     HTML = "http://www.w3.org/1999/xhtml",
//     SVG = "http://www.w3.org/2000/svg"
// }
// export type DOMAttrs = {
//     [key: string]: undefined | string | number | EventListenerOrEventListenerObject;
// };
// export type DOMChild = Node | string | ((owner: Element) => Node);
// create("div", this)
//     .attr("id", "app")
//     .class("container")
//     .append(
//         create("h1", this).text("Welcome to My App"),
//         create("button", this)
//             .text("Click Me")
//             .on("click", () => alert("Button Clicked!"))
//     )
//     .mount(document.body);
const SVG_TAGS = new Set([
    "svg", "circle", "rect", "path", "line", "ellipse", "polygon", "polyline", "g", "defs", "symbol", "use", "text", "tspan"
]);
function create(selector, owner) {
    const dom = DOMNode.create(selector, owner);
    return dom;
}
class DOMNode extends disposable_1.Disposable {
    _element = null;
    _events = new Map();
    _owner = null;
    static create(selector, owner) {
        const dom = new DOMNode(selector, owner);
        return dom;
    }
    constructor(selector, owner) {
        super();
        this._owner = owner;
        if (SVG_TAGS.has(selector)) {
            this._element = document.createElementNS('http://www.w3.org/2000/svg', selector);
        }
        else {
            this._element = document.createElement(selector);
        }
        if (this._owner) {
            this._owner.register(this);
        }
        // const match = selector.split(':');
        // if (match.length === 1) {
        //   this._element = document.createElement(selector);
        // } else if (match.length === 2) {
        //   const namespace = match[0];
        //   const tagName = match[1];
        //   if (namespace === 'svg') {
        //     this._element = document.createElementNS('http://www.w3.org/2000/svg', tagName) as unknown as SVGElement;
        //   } if (namespace === 'html') {
        //     this._element = document.createElementNS(
        //       'http://www.w3.org/1999/xhtml',
        //       tagName,
        //     ) as HTMLElement;
        //   } else {
        //     throw new Error('Invalid selector');
        //   }
        //   if (this._owner) {
        //     this._owner.register(this);
        //   }
        // }
    }
    dispose() {
        if (this._disposed) {
            return;
        }
        this._element.remove();
        if (this._owner) {
            this._owner.unregister(this);
            this._owner = null;
        }
        super.dispose();
    }
    attr(name, value, condition) {
        if (value === undefined && condition === undefined) {
            return this._element.getAttribute(name);
        }
        if (condition instanceof value_1.Value) {
            this.register(condition.subscribe((cond) => {
                if (cond) {
                    if (value instanceof value_1.Value) {
                        this.register(value.subscribe((val) => {
                            if (val === null || val === undefined || val === "") {
                                this._element.removeAttribute(name);
                            }
                            else {
                                this._element.setAttribute(name, String(val));
                            }
                        }));
                    }
                    else {
                        if (value === null || value === undefined || value === "") {
                            this._element.removeAttribute(name);
                        }
                        else {
                            this._element.setAttribute(name, String(value));
                        }
                    }
                }
                else {
                    this._element.removeAttribute(name);
                }
            }));
        }
        else if (condition === true) {
            if (value instanceof value_1.Value) {
                this.register(value.subscribe((val) => {
                    if (val === null || val === undefined || val === "") {
                        this._element.removeAttribute(name);
                    }
                    else {
                        this._element.setAttribute(name, String(val));
                    }
                }));
            }
            else {
                if (value === null || value === undefined || value === "") {
                    this._element.removeAttribute(name);
                }
                else {
                    this._element.setAttribute(name, String(value));
                }
            }
        }
        else {
            if (value instanceof value_1.Value) {
                this.register(value.subscribe((v) => {
                    if (v === null || v === undefined || v === "" || condition === false) {
                        this._element.removeAttribute(name);
                    }
                    else {
                        this._element.setAttribute(name, String(v));
                    }
                }));
            }
            else {
                if (value === null || value === undefined || value === "" || condition === false) {
                    this._element.removeAttribute(name);
                }
                else {
                    this._element.setAttribute(name, String(value));
                }
            }
        }
        return this;
    }
    property(name, value) {
        if (value === undefined) {
            return this._element[name];
        }
        if (value instanceof value_1.Value) {
            this.register(value.subscribe((val) => {
                this._element[name] = val;
            }));
        }
        else {
            if (value === null || value === undefined || value === "") {
                delete this._element[name];
            }
            else {
                this._element[name] = value;
            }
        }
        return this;
    }
    style(name, value, condition) {
        if (value === undefined) {
            return this._element.style.getPropertyValue(name);
        }
        if (condition instanceof value_1.Value) {
            this.register(condition.subscribe((cond) => {
                if (cond) {
                    if (value instanceof value_1.Value) {
                        this.register(value.subscribe((val) => {
                            this._element.style.setProperty(name, val);
                        }));
                    }
                    else {
                        this._element.style.setProperty(name, value);
                    }
                }
                else {
                    this._element.style.removeProperty(name);
                }
            }));
        }
        else if (condition === true || condition === undefined) {
            if (value instanceof value_1.Value) {
                this.register(value.subscribe((val) => {
                    this._element.style.setProperty(name, val);
                }));
            }
            else {
                this._element.style.setProperty(name, value);
            }
        }
        else {
            this._element.style.removeProperty(name);
        }
        return this;
    }
    class(className, active = true) {
        if (className === undefined) {
            return this;
        }
        if (active instanceof value_1.Value) {
            this.register(active.subscribe((val) => {
                if (val) {
                    if (Array.isArray(className)) {
                        this._element.classList.add(...className);
                    }
                    else {
                        this._element.classList.add(className);
                    }
                }
                else {
                    if (Array.isArray(className)) {
                        this._element.classList.remove(...className);
                    }
                    else {
                        this._element.classList.remove(className);
                    }
                }
            }));
        }
        else {
            if (active) {
                if (Array.isArray(className)) {
                    this._element.classList.add(...className);
                }
                else {
                    this._element.classList.add(className);
                }
            }
            else {
                if (Array.isArray(className)) {
                    this._element.classList.remove(...className);
                }
                else {
                    this._element.classList.remove(className);
                }
            }
        }
        return this;
    }
    empty() {
        [...this._disposables].forEach(([key, dispose]) => {
            if (key instanceof DOMNode) {
                if (key._owner !== this) {
                    console.warn(`Cannot dispose child DOMNode that is not owned by this node.`, key);
                    return;
                }
                key.dispose();
            }
        });
        this._element.innerHTML = '';
        return this;
    }
    on(eventType, listener, options) {
        for (const [, event] of this._events.entries()) {
            if (event.eventType === eventType && event.listener === listener) {
                console.warn(`The event listener for ${eventType} is already registered on this element.`);
                return this;
            }
        }
        this._element.addEventListener(eventType, listener, options);
        if (options && typeof options === 'object' && options.once) {
            return this;
        }
        const dispose = (0, disposable_1.createDisposeFn)(() => {
            this._element.removeEventListener(eventType, listener, options);
        });
        this.register(dispose);
        this._events.set(dispose, { eventType, listener });
        return this;
    }
    off(eventType, listener, options) {
        this._element.removeEventListener(eventType, listener, options);
        for (const [dispose, event] of this._events.entries()) {
            if (event.eventType === eventType && event.listener === listener) {
                this._events.delete(dispose);
                this.unregister(dispose);
                break;
            }
        }
        return this;
    }
    dataset(name, value) {
        if (arguments.length === 1) {
            return this._element.dataset[name];
        }
        if (value instanceof value_1.Value) {
            this.register(value.subscribe((val) => {
                this._element.dataset[name] = String(val);
            }));
        }
        else {
            if (value === null || value === undefined) {
                delete this._element.dataset[name];
            }
            else {
                this._element.dataset[name] = String(value);
            }
        }
        return this;
    }
    text(content) {
        this.empty();
        if (content instanceof value_1.Value) {
            this.register(content.subscribe((val) => {
                if (this.element instanceof HTMLElement) {
                    if (val === null || val === undefined) {
                        this._element.innerText = '';
                    }
                    else {
                        this._element.innerText = String(val);
                    }
                }
            }));
        }
        else {
            if (this.element instanceof HTMLElement) {
                this._element.innerText = String(content);
            }
        }
        return this;
    }
    html(content) {
        this.empty();
        this._element.innerHTML = content;
        return this;
    }
    display(isVisible) {
        if (isVisible instanceof value_1.Value) {
            this.register(isVisible.subscribe((visible) => {
                this._element.style.display = visible ? '' : 'none';
            }));
        }
        else {
            this._element.style.display = isVisible ? '' : 'none';
        }
        return this;
    }
    visibility(isVisible) {
        if (isVisible instanceof value_1.Value) {
            this.register(isVisible.subscribe((visible) => {
                this._element.style.visibility = visible ? 'visible' : 'hidden';
            }));
        }
        else {
            this._element.style.visibility = isVisible ? 'visible' : 'hidden';
        }
        return this;
    }
    append(...children) {
        for (const child of children) {
            child.mount(this);
        }
        return this;
    }
    mount(parent) {
        if (parent instanceof DOMNode) {
            parent._element.appendChild(this._element);
        }
        else {
            parent.appendChild(this._element);
        }
        return this;
    }
    focus(options) {
        if (this._element instanceof HTMLElement || this._element instanceof SVGElement) {
            setTimeout(() => {
                this._element.focus(options);
            }, 100);
        }
        return this;
    }
    get element() {
        return this._element;
    }
    get owner() {
        return this._owner;
    }
}
exports.DOMNode = DOMNode;


/***/ },

/***/ 460
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = void 0;
const disposable_1 = __webpack_require__(626);
class Emitter extends disposable_1.Disposable {
    _emitterHandles;
    constructor() {
        super();
        this._emitterHandles = {};
    }
    dispose() {
        if (this.disposed)
            return;
        this._emitterHandles = {};
        super.dispose();
    }
    on(name, callback, scope = this) {
        this._addCallback(name, callback, scope, false);
        return () => this.off(name, callback, scope);
    }
    once(name, callback, scope = this) {
        this._addCallback(name, callback, scope, true);
        return () => this.off(name, callback, scope);
    }
    off(name, callback, scope = this) {
        const handlesByName = this._emitterHandles[name];
        if (handlesByName) {
            let i = handlesByName.length;
            while (--i >= 0) {
                if (handlesByName[i].callback === callback &&
                    handlesByName[i].scope === scope) {
                    handlesByName.splice(i, 1);
                }
            }
        }
    }
    emit(name, value) {
        const handlesByName = this._emitterHandles[name];
        if (!handlesByName) {
            return;
        }
        for (const handle of handlesByName) {
            handle.callback.call(handle.scope, value);
            if (handle.once)
                this.off(name, handle.callback, handle.scope);
        }
    }
    _addCallback(name, callback, scope, once) {
        let handlesByName = this._emitterHandles[name];
        if (!handlesByName) {
            handlesByName = this._emitterHandles[name] = [];
        }
        handlesByName.push({
            callback,
            scope,
            once,
        });
    }
}
exports.Emitter = Emitter;
exports["default"] = Emitter;


/***/ },

/***/ 343
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const dom_1 = __webpack_require__(546);
class Modal extends dom_1.DOMNode {
    _app;
    _store;
    _config;
    _options;
    constructor(app, store, config, options) {
        super("div");
        this._app = app;
        this._store = store;
        this._config = config;
        this._options = options;
        if (options.classNames) {
            if (Array.isArray(options.classNames)) {
                this.class([...options.classNames]);
            }
            else {
                this.class(options.classNames);
            }
        }
    }
    dispose() {
        this._app.removeModal(this);
        super.dispose();
    }
    async load() {
        if (this._options?.onAfterLoad) {
            this._options.onAfterLoad(this);
        }
    }
    async unload() {
        if (this._options?.onAfterUnload) {
            this._options.onAfterUnload(this);
        }
    }
    async show() {
        if (this._options?.onAfterShow) {
            this._options.onAfterShow(this);
        }
    }
    async close() {
        await this._app?.removeModal(this);
        if (this._options?.onAfterClose) {
            this._options.onAfterClose(this);
        }
    }
}
exports.Modal = Modal;


/***/ },

/***/ 335
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Page = void 0;
const dom_1 = __webpack_require__(546);
class Page extends dom_1.DOMNode {
    _app;
    _store;
    _config;
    constructor(app, store, config) {
        super("div", null);
        this._app = app;
        this._store = store;
        this._config = config;
    }
    async load() {
        return Promise.resolve();
    }
    async unload() {
        return Promise.resolve();
    }
    setActiveElement(element) {
        if (element instanceof dom_1.DOMNode) {
            setTimeout(() => {
                element.element.focus();
            }, 100);
        }
        else if (element instanceof HTMLElement) {
            setTimeout(() => {
                element.focus();
            }, 100);
        }
    }
}
exports.Page = Page;


/***/ },

/***/ 245
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ },

/***/ 413
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.toBoolean = toBoolean;
__webpack_unused_export__ = toNumber;
__webpack_unused_export__ = toString;
const value_1 = __webpack_require__(667);
function toBoolean(value, defaultValue = false) {
    if (value instanceof value_1.Value) {
        value = value.get();
    }
    if (typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'string') {
        const v = value.toLowerCase();
        if (v === 'true' || v === '1' || v === 'yes' || v === 'on') {
            return true;
        }
        else if (v === 'false' || v === '0' || v === 'no' || v === 'off') {
            return false;
        }
    }
    else if (typeof value === 'number') {
        return value !== 0;
    }
    return defaultValue;
}
function toNumber(value, defaultValue = 0) {
    if (value instanceof value_1.Value) {
        value = value.get();
    }
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        const v = parseFloat(value);
        return isNaN(v) ? defaultValue : v;
    }
    else if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    return defaultValue;
}
function toString(value, defaultValue = '') {
    if (value instanceof value_1.Value) {
        value = value.get();
    }
    if (typeof value === 'string') {
        return value;
    }
    else if (typeof value === 'number' || typeof value === 'boolean') {
        return value.toString();
    }
    return defaultValue;
}


/***/ },

/***/ 591
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ },

/***/ 302
(__unused_webpack_module, exports) {


/* console-colors.ts
   Minimalna biblioteka do kolorowania logów w konsoli przeglądarki (%c + CSS)
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLogger = createLogger;
exports.tagged = tagged;
const LEVEL_ORDER = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40,
};
const DEFAULT_THEME = {
    level: {
        debug: { color: "#6b7280" }, // gray
        info: { color: "#2563eb" }, // blue
        warn: { color: "#d97706" }, // amber
        error: { color: "#dc2626" }, // red
    },
    prefix: {
        color: "#111827",
        background: "#e5e7eb",
        padding: "2px 6px",
        borderRadius: "6px",
        fontWeight: "600",
    },
    chip: {
        color: "#111827",
        background: "#f3f4f6",
        padding: "2px 6px",
        borderRadius: "999px",
        fontWeight: "600",
    },
    metaKey: { color: "#374151", fontWeight: "600" },
    metaVal: { color: "#111827" },
};
function styleToString(style) {
    return Object.entries(style)
        .filter(([, v]) => v != null && v !== "")
        .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${v}`)
        .join(";");
}
function mergeTheme(base, patch) {
    if (!patch)
        return base;
    return {
        level: { ...base.level, ...(patch.level ?? {}) },
        prefix: { ...base.prefix, ...(patch.prefix ?? {}) },
        chip: { ...base.chip, ...(patch.chip ?? {}) },
        metaKey: { ...base.metaKey, ...(patch.metaKey ?? {}) },
        metaVal: { ...base.metaVal, ...(patch.metaVal ?? {}) },
    };
}
function consoleMethodFor(level) {
    // debug bywa niewidoczny w niektórych ustawieniach konsoli, ale to OK.
    const c = console;
    if (level === "debug" && typeof c.debug === "function")
        return c.debug.bind(console);
    if (level === "info" && typeof c.info === "function")
        return c.info.bind(console);
    if (level === "warn" && typeof c.warn === "function")
        return c.warn.bind(console);
    if (level === "error" && typeof c.error === "function")
        return c.error.bind(console);
    return console.log.bind(console);
}
function shouldLog(level, enabled, minLevel) {
    return enabled && LEVEL_ORDER[level] >= LEVEL_ORDER[minLevel];
}
function fmtPrefix(ns) {
    return ns ? `%c[${ns}]%c` : "%c%c";
}
function createLogger(opts = {}) {
    const namespace = opts.namespace;
    let enabled = opts.enabled ?? true;
    let minLevel = opts.minLevel ?? "debug";
    const theme = mergeTheme(DEFAULT_THEME, opts.theme);
    const prefixStyle = styleToString(theme.prefix);
    const resetStyle = ""; // reset do domyślnego
    function log(level, args) {
        if (!shouldLog(level, enabled, minLevel))
            return;
        const method = consoleMethodFor(level);
        const levelStyle = styleToString(theme.level[level]);
        // Prefix: [ns] w "chipie", potem reszta w kolorze poziomu (opcjonalnie)
        if (namespace) {
            method(`%c[${namespace}]%c`, `${prefixStyle};${levelStyle}`, resetStyle, ...args);
        }
        else {
            method(`%c`, levelStyle, ...args);
        }
    }
    function groupBase(collapsed, title, args) {
        if (!enabled)
            return;
        const fn = collapsed ? console.groupCollapsed : console.group;
        const levelStyle = styleToString(theme.level.info);
        if (namespace) {
            fn.call(console, `%c[${namespace}]%c %c${title}%c`, prefixStyle, resetStyle, levelStyle, resetStyle, ...args);
        }
        else {
            fn.call(console, `%c${title}%c`, levelStyle, resetStyle, ...args);
        }
    }
    function chip(label, style = {}) {
        // Użycie: logger.info(logger.chip("NET"), "fetch…", url)
        // Uwaga: chip() zwraca string z %c + reset, a style dopinasz do argumentów logu ręcznie,
        // więc wygodniej jest mieć helper "chipArgs" — ale trzymamy API proste.
        // Poniżej: zwracamy tekst z dwoma %c, a style pobierzesz przez chipStyle().
        return `%c${label}%c`;
    }
    function chipStyle(style = {}) {
        const s = styleToString({ ...theme.chip, ...style });
        return [s, ""];
    }
    // function green(label: string): [string, string, string] {
    //     return [`%c${label}%c`, ...chipStyle({ background: "#d1fae5", color: "#065f46" })];
    // }
    function meta(obj) {
        if (!enabled)
            return;
        const kStyle = styleToString(theme.metaKey);
        const vStyle = styleToString(theme.metaVal);
        const parts = [];
        const fmt = [];
        for (const [k, v] of Object.entries(obj)) {
            fmt.push(`%c${k}%c=%c${String(v)}%c`);
            parts.push(kStyle, "", vStyle, "");
        }
        const msg = fmt.join("  ");
        if (namespace) {
            console.log(`%c[${namespace}]%c ${msg}`, prefixStyle, "", ...parts);
        }
        else {
            console.log(msg, ...parts);
        }
    }
    // Mały trik: do chipów musisz dołączyć style jako argumenty.
    // Dodajemy więc metodę "chipArgs" jako właściwość funkcji chip (TypeScript-friendly).
    chip.args = (style) => chipStyle(style);
    // (chip as any).green = green;
    const api = {
        debug: (...a) => log("debug", a),
        info: (...a) => log("info", a),
        warn: (...a) => log("warn", a),
        error: (...a) => log("error", a),
        group: (t, ...a) => groupBase(false, t, a),
        groupCollapsed: (t, ...a) => groupBase(true, t, a),
        groupEnd: () => console.groupEnd(),
        time: (label) => enabled && console.time(label),
        timeEnd: (label) => enabled && console.timeEnd(label),
        chip: chip,
        meta,
    };
    // Dodatkowe sterowanie (nie w typie Logger, ale możesz rzutować gdy chcesz):
    // (api as any).setEnabled = (v: boolean) => (enabled = v);
    // (api as any).setMinLevel = (v: LogLevel) => (minLevel = v);
    return api;
}
/** Opcjonalny helper: szybkie "tagowane" logi */
function tagged(ns, opts) {
    return createLogger({ ...(opts ?? {}), namespace: ns });
}


/***/ },

/***/ 394
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.log = void 0;
const console_colors_1 = __webpack_require__(302);
exports.log = (0, console_colors_1.createLogger)({ namespace: "DUCT-TAPE", minLevel: "debug" });


/***/ },

/***/ 667
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValueLogicObserver = exports.ValueObserver = exports.ValueStoreRaw = exports.ValueStore = exports.Value = void 0;
exports.createValue = createValue;
exports.isValue = isValue;
const common_1 = __webpack_require__(237);
const disposable_1 = __webpack_require__(626);
const to_1 = __webpack_require__(413);
function createValue(value, register) {
    return new ValueStore(value, register);
}
class Value extends disposable_1.Disposable {
    equal(test, register) {
        let transform;
        if (test instanceof Function) {
            transform = test;
        }
        else if (Array.isArray(test)) {
            transform = (v) => test.includes(v);
        }
        else {
            transform = (v) => v === test;
        }
        const transformer = new ValueObserver(this, transform);
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    notEqual(test, register) {
        let transform;
        if (typeof test === 'string' || typeof test === 'number' || typeof test === 'boolean') {
            transform = (v) => v !== test;
        }
        else if (Array.isArray(test)) {
            transform = (v) => !test.includes(v);
        }
        else {
            transform = (value) => !test(value);
        }
        const transformer = new ValueObserver(this, transform);
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    format(formatter, register) {
        const transformer = new ValueObserver(this, formatter);
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    map(transformerFn, register) {
        const transformer = new ValueObserver(this, transformerFn);
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    mapBoolean(trueValue, falseValue, register) {
        const transformer = new ValueObserver(this, (value) => {
            if ((0, to_1.toBoolean)(value) === true) {
                return trueValue;
            }
            else {
                return falseValue;
            }
        });
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    not(register) {
        const transformer = new ValueObserver(this, (value) => !(0, to_1.toBoolean)(value));
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    and(other, register) {
        const transformer = new ValueLogicObserver(this, other, (a, b) => (0, to_1.toBoolean)(a) && (0, to_1.toBoolean)(b));
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
    or(other, register) {
        const transformer = new ValueLogicObserver(this, other, (a, b) => (0, to_1.toBoolean)(a) || (0, to_1.toBoolean)(b));
        if (register) {
            register.register(transformer);
        }
        return transformer;
    }
}
exports.Value = Value;
function isValue(object) {
    return object instanceof Value;
}
class ValueStore extends Value {
    listeners = [];
    value;
    initValue;
    prev;
    _register;
    constructor(value, register) {
        super();
        this._register = register;
        this.value = value;
        this.initValue = value;
        this.prev = undefined;
        if (register) {
            register.register(this);
        }
    }
    dispose() {
        if (this.disposed)
            return;
        this.listeners.splice(0, this.listeners.length);
        if (this._register) {
            this._register.unregister(this);
            this._register = undefined;
        }
        super.dispose();
    }
    subscribe(callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        this.deliveryValueToSubscriber(handle, this.value, this.prev);
        return () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
    }
    set(value) {
        this.prev = this.get();
        if (this.value !== value) {
            if (Array.isArray(this.value)) {
                this.value = [...value];
            }
            else if (typeof this.value === 'object') {
                this.value = (0, common_1.mergeDeep)(this.value, value);
            }
            else {
                this.value = value;
            }
            this.deliveryValue(this.value, this.prev);
        }
    }
    get() {
        if (Array.isArray(this.value)) {
            return [...this.value];
        }
        else if (typeof this.value === 'object') {
            return (0, common_1.mergeDeep)({}, this.value);
        }
        return this.value;
    }
    toString() {
        return this.value === undefined || this.value === null
            ? 'undefined'
            : this.value.toString();
    }
    deliveryValue(value, prev) {
        for (const handle of this.listeners) {
            this.deliveryValueToSubscriber(handle, value, prev);
        }
    }
    deliveryValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}
exports.ValueStore = ValueStore;
class ValueStoreRaw extends ValueStore {
    constructor(value, register) {
        super(value, register);
    }
    set(value) {
        this.prev = this.get();
        this.value = value;
        this.deliveryValue(this.value, this.prev);
    }
}
exports.ValueStoreRaw = ValueStoreRaw;
class ValueObserver extends Value {
    listeners = [];
    watch;
    prev;
    value;
    _transform;
    _unsubscribe = null;
    constructor(watch, transform) {
        super();
        this.watch = watch;
        this._transform = transform;
        this.value = this._transform(this.watch.get());
        this._unsubscribe = this.watch.subscribe((value) => {
            const newValue = this._transform(value);
            if (this.value !== newValue) {
                this.prev = this.value;
                this.value = newValue;
                this.deliverValue(this.value, this.prev);
            }
        });
    }
    dispose() {
        if (this.disposed)
            return;
        this.watch = undefined;
        this._unsubscribe?.();
        this.listeners.splice(0, this.listeners.length);
        super.dispose();
    }
    subscribe(callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        this.deliverValueToSubscriber(handle, this.value, this.prev);
        return () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
    }
    get() {
        return this.value;
    }
    toString() {
        return this.watch?.toString() || '';
    }
    get subscribersLength() {
        return this.listeners.length;
    }
    deliverValue(value, prev) {
        for (const handle of this.listeners) {
            this.deliverValueToSubscriber(handle, value, prev);
        }
    }
    deliverValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}
exports.ValueObserver = ValueObserver;
class ValueLogicObserver extends Value {
    listeners = [];
    watch1;
    watch2;
    prev;
    value;
    transform;
    constructor(watch1, watch2, transform) {
        super();
        this.watch1 = watch1;
        this.watch2 = watch2;
        this.transform = transform;
        this.value = this.transform(this.watch1.get(), this.watch2.get());
        watch1.subscribe((value) => {
            const newValue = this.transform(value, watch2.get());
            if (this.value !== newValue) {
                this.prev = this.value;
                this.value = newValue;
                this.deliverValue(this.value, this.prev);
            }
        });
        watch2.subscribe((value) => {
            const newValue = this.transform(watch1.get(), value);
            if (this.value !== newValue) {
                this.prev = this.value;
                this.value = newValue;
                this.deliverValue(this.value, this.prev);
            }
        });
    }
    dispose() {
        if (this.disposed)
            return;
        this.watch1 = undefined;
        this.watch2 = undefined;
        this.listeners.splice(0, this.listeners.length);
        super.dispose();
    }
    subscribe(callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        this.deliverValueToSubscriber(handle, this.value, this.prev);
        return () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
    }
    get() {
        return this.value;
    }
    toString() {
        return `${this.watch1?.toString()} ${this.watch2?.toString()}`;
    }
    get subscribersLength() {
        return this.listeners.length;
    }
    deliverValue(value, prev) {
        for (const handle of this.listeners) {
            this.deliverValueToSubscriber(handle, value, prev);
        }
    }
    deliverValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}
exports.ValueLogicObserver = ValueLogicObserver;


/***/ },

/***/ 771
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Editor = void 0;
const duct_tape_1 = __webpack_require__(415);
const object_widget_1 = __webpack_require__(488);
class Editor extends duct_tape_1.Disposable {
    _container;
    _data = {};
    _api;
    _types = {};
    _rootWidget = null;
    constructor(container, api) {
        super();
        this._container = container;
        this._api = api;
        console.log("Editor created");
    }
    get api() {
        return this._api;
    }
    saveState() {
        this._api.triggerStateSave();
    }
    async run(data) {
        if (this._rootWidget) {
            this.unregister(this._rootWidget);
            this._rootWidget.dispose();
            this._rootWidget = null;
        }
        this._data = data;
        return new Promise((resolve) => {
            console.log("Editor running...");
            fetch(this._api.enginePath("schema.json")).then(async (response) => {
                const schema = await response.json();
                console.log("Schema loaded:", schema);
                const propertiesSchema = { type: "object", properties: schema.properties };
                if (schema.definitions) {
                    this._types = schema.definitions;
                    this.replaceDefinitions(propertiesSchema);
                }
                this._rootWidget = new object_widget_1.ObjectWidget(this, "Root", propertiesSchema, this._data).mount(this._container);
                resolve();
            }).catch((error) => {
                console.error("Error loading schema:", error);
                resolve();
            });
        });
    }
    replaceDefinitions(schema) {
        for (const [key, prop] of Object.entries(schema.properties)) {
            if (prop.type === "string" && prop.enum && typeof prop.enum === "string" && this._types[prop.enum]) {
                schema.properties[key] = {
                    ...prop,
                    enum: this._types[prop.enum]
                };
            }
            else if (prop.type === "object") {
                this.replaceDefinitions(prop);
            }
            else if (prop.type === "array") {
                const item = prop.item;
                if (item.type === "object") {
                    this.replaceDefinitions(item);
                }
            }
        }
    }
}
exports.Editor = Editor;


/***/ },

/***/ 180
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.ArrayWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const object_widget_1 = __webpack_require__(488);
const widget_1 = __webpack_require__(200);
class ArrayWidget extends widget_1.Widget {
    _schema;
    _data;
    _itemsContainer;
    constructor(editor, key, schema, data) {
        super(editor);
        this._editor = editor;
        this._schema = schema;
        this._data = data;
        this.class("array-component");
        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;
            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }
            (0, duct_tape_1.create)("div", this)
                .class("title")
                .text(titleText)
                .mount(this);
        }
        this.append(this._itemsContainer = (0, duct_tape_1.create)("div", this)
            .class("items-container"));
        this.build();
    }
    build() {
        if (this._schema.item === undefined) {
            return;
        }
        this._data.forEach((data, index) => {
            const item = (0, duct_tape_1.create)("div", this).class("array-item");
            this._itemsContainer.append(item);
            if (this._schema.item.type === "object") {
                item.append(new object_widget_1.ObjectWidget(this._editor, `Element #${index + 1}`, this._schema.item, data));
            }
            else {
                console.warn(`Unsupported array item type: ${this._schema.item.type}`);
            }
        });
    }
}
exports.ArrayWidget = ArrayWidget;


/***/ },

/***/ 367
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.BooleanWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const widget_1 = __webpack_require__(200);
class BooleanWidget extends widget_1.Widget {
    _schema;
    _data;
    _checkbox;
    constructor(editor, key, schema, data) {
        super(editor);
        this._editor = editor;
        this._schema = schema;
        this._data = data;
        this.class("boolean-component");
        const label = schema.label || key;
        this._checkbox = (0, duct_tape_1.create)("input", this)
            .attr("type", "checkbox")
            .style("marginRight", "8px")
            .property("checked", !!this._data[key])
            .on("input", () => {
            this._data[key] = this._checkbox.property("checked");
            this._editor.saveState();
        });
        const labelNode = (0, duct_tape_1.create)("label", this)
            .style("cursor", "pointer")
            .append(this._checkbox)
            .append((0, duct_tape_1.create)("span", this).text(label));
        this.append(labelNode);
    }
}
exports.BooleanWidget = BooleanWidget;


/***/ },

/***/ 226
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.NumberWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const widget_1 = __webpack_require__(200);
var NumberFormat;
(function (NumberFormat) {
    NumberFormat["Integer"] = "integer";
    NumberFormat["Float"] = "float";
    NumberFormat["Number"] = "number";
})(NumberFormat || (NumberFormat = {}));
class NumberWidget extends widget_1.Widget {
    _schema;
    _format = NumberFormat.Number;
    _min = -Infinity;
    _max = Infinity;
    _data;
    _input;
    _messageNode;
    constructor(editor, key, schema, data) {
        super(editor);
        this._editor = editor;
        this._schema = schema;
        this._data = data;
        this.class("number-component");
        if (schema.format === "integer") {
            this._format = NumberFormat.Integer;
        }
        else if (schema.format === "float") {
            this._format = NumberFormat.Float;
        }
        else {
            this._format = NumberFormat.Number;
        }
        this._min = schema.min !== undefined ? schema.min : -Infinity;
        this._max = schema.max !== undefined ? schema.max : Infinity;
        const label = schema.label || key;
        this._input = (0, duct_tape_1.create)("input", this)
            .attr("type", "number")
            .style("display", "block")
            .style("marginBottom", "8px")
            .property("value", this._data[key] || 0)
            .on("input", () => {
            const value = this._input.property("value");
            if (value === undefined || value === "") {
                this._messageNode.text("Wartość nie może być pusta.");
                return;
            }
            let numValue;
            if (this._format === NumberFormat.Integer) {
                numValue = parseInt(value || "0", 10);
            }
            else {
                numValue = parseFloat(value || "0");
            }
            if (isNaN(numValue)) {
                this._messageNode.text("Wartość musi być liczbą.");
                return;
            }
            else if (this._format === NumberFormat.Integer && !Number.isInteger(numValue)) {
                this._messageNode.text("Wartość musi być liczbą całkowitą.");
                return;
            }
            else if (numValue < this._min) {
                this._messageNode.text(`Wartość musi być większa lub równa ${this._min}.`);
                return;
            }
            else if (numValue > this._max) {
                this._messageNode.text(`Wartość musi być mniejsza lub równa ${this._max}.`);
                return;
            }
            else {
                this._messageNode.text("");
            }
            this._data[key] = value;
            this._editor.saveState();
        });
        const labelNode = (0, duct_tape_1.create)("label", this)
            .text(label)
            .style("display", "block")
            .style("marginBottom", "4px");
        this._messageNode = (0, duct_tape_1.create)("div", this)
            .class("message")
            .style("color", "red")
            .style("fontSize", "12px")
            .style("marginBottom", "8px");
        this.append(labelNode, this._input, this._messageNode);
    }
}
exports.NumberWidget = NumberWidget;


/***/ },

/***/ 488
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.ObjectWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const number_widget_1 = __webpack_require__(226);
const array_widget_1 = __webpack_require__(180);
const string_widget_1 = __webpack_require__(970);
const boolean_widget_1 = __webpack_require__(367);
const ref_widget_1 = __webpack_require__(464);
const widget_1 = __webpack_require__(200);
class ObjectWidget extends widget_1.Widget {
    _schema;
    _data;
    _content;
    constructor(editor, key, schema, data) {
        super(editor);
        this._schema = schema;
        this._data = data;
        this.class("object-component");
        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;
            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }
            (0, duct_tape_1.create)("div", this)
                .class("title")
                .text(titleText)
                .mount(this);
        }
        this.append(this._content = (0, duct_tape_1.create)("div", this)
            .class("content"));
        this.build();
    }
    dispose() {
        if (this._disposed)
            return;
        super.dispose();
    }
    build() {
        for (const [key, prop] of Object.entries(this._schema.properties)) {
            if (this._data[key] === undefined && prop.type !== "ref") {
                console.warn(`Data for key '${key}' is undefined.`);
                continue;
            }
            if (prop.private === true) {
                continue;
            }
            if (prop.type === "string") {
                this.register(new string_widget_1.StringWidget(this._editor, key, prop, this._data).mount(this._content));
            }
            else if (prop.type === "number") {
                this.register(new number_widget_1.NumberWidget(this._editor, key, prop, this._data).mount(this._content));
            }
            else if (prop.type === "boolean") {
                this.register(new boolean_widget_1.BooleanWidget(this._editor, key, prop, this._data).mount(this._content));
            }
            else if (prop.type === "object") {
                const dataObj = this._data[key] || null;
                if (dataObj !== null && typeof dataObj === "object") {
                    this.register(new ObjectWidget(this._editor, key, prop, dataObj).mount(this._content));
                }
            }
            else if (prop.type === "array") {
                this.register(new array_widget_1.ArrayWidget(this._editor, key, prop, this._data[key] || []).mount(this._content));
            }
            else if (prop.type === "ref") {
                this.register(new ref_widget_1.RefWidget(this._editor, key, prop, this._data).mount(this._content));
            }
        }
    }
}
exports.ObjectWidget = ObjectWidget;


/***/ },

/***/ 464
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.RefWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const widget_1 = __webpack_require__(200);
const cache = new Map();
class RefWidget extends widget_1.Widget {
    _schema;
    _data;
    _ref;
    constructor(editor, key, schema, data) {
        super(editor);
        this._schema = schema;
        this._data = data;
        this.class("string-component");
        const label = this._schema.label || key;
        this._ref = (0, duct_tape_1.create)("div", this)
            .style("display", "block")
            .style("marginBottom", "8px");
        const labelNode = (0, duct_tape_1.create)("label", this)
            .text(label)
            .style("display", "block")
            .style("marginBottom", "4px");
        this.append(labelNode);
        this.append(this._ref);
        this.build();
    }
    async getFileData(path) {
        return new Promise((resolve, reject) => {
            if (cache.has(path)) {
                resolve(cache.get(path));
                return;
            }
            fetch(this._editor.api.enginePath(path)).then(async (response) => {
                if (!response.ok) {
                    reject(new Error(`Failed to fetch file: ${path}`));
                    return;
                }
                const data = await response.json();
                cache.set(path, data);
                resolve(data);
            }).catch((error) => {
                console.error(`Error fetching file '${path}':`, error);
                reject(error);
            });
        });
    }
    async build() {
        return new Promise(async (resolve, reject) => {
            try {
                const rawPath = this._schema.path;
                const tokens = rawPath.match(/\${(.*?)}/g) || [];
                const path = tokens.reduce((acc, token) => {
                    const key = token.slice(2, -1);
                    const value = this._data[key] || "";
                    return acc.replace(token, value);
                }, rawPath);
                const fileData = await this.getFileData(path.split("#")[0]);
                const pointer = path.split("#")[1];
                const segments = pointer.split("/").filter(seg => seg.length > 0);
                let value = fileData;
                for (let segment of segments) {
                    if (segment.startsWith("[") && segment.endsWith("]")) {
                        if (!Array.isArray(value)) {
                            value = undefined;
                            console.warn(`Expected array but found non-array at segment: ${segment}`);
                            break;
                        }
                        segment = segment.slice(1, -1); // Remove [ and ]
                        if (segment.startsWith("{") && segment.endsWith("}")) {
                            // Array access by property
                            const conditionStr = segment.slice(1, -1); // Remove { and }
                            const conditions = conditionStr.split(",").map(s => s.trim());
                            const conditionsTokens = conditions.map(cond => {
                                const [propKey, propValueTemplate] = cond.split(":");
                                const propValueTokens = propValueTemplate.match(/\${(.*?)}/g) || [];
                                const propValue = propValueTokens.reduce((acc, token) => {
                                    const key = token.slice(2, -1);
                                    const value = this._data[key] || "";
                                    return acc.replace(token, value);
                                }, propValueTemplate);
                                return { propKey, propValue };
                            });
                            let foundItem = undefined;
                            for (const item of value) {
                                let allMatch = true;
                                for (const { propKey, propValue } of conditionsTokens) {
                                    if (item[propKey] != propValue) {
                                        allMatch = false;
                                        break;
                                    }
                                }
                                if (allMatch) {
                                    foundItem = item;
                                    break;
                                }
                            }
                            if (foundItem !== undefined) {
                                value = foundItem;
                            }
                            else {
                                value = undefined;
                                console.warn(`Array access by properties not found for segment: ${segment}`);
                                break;
                            }
                        }
                        else {
                            // Array access by index
                            const index = parseInt(segment, 10);
                            if (isNaN(index) || index < 0 || index >= value.length) {
                                value = undefined;
                                console.warn(`Invalid array index access at segment: ${segment}`);
                                break;
                            }
                            value = value[index];
                        }
                    }
                    else {
                        if (value.hasOwnProperty(segment)) {
                            value = value[segment];
                        }
                        else {
                            value = undefined;
                            console.warn(`Property '${segment}' not found in object.`);
                            break;
                        }
                    }
                }
                this._ref
                    .text(value || "");
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.RefWidget = RefWidget;


/***/ },

/***/ 970
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.StringWidget = void 0;
const duct_tape_1 = __webpack_require__(415);
const widget_1 = __webpack_require__(200);
class StringWidget extends widget_1.Widget {
    _schema;
    _data;
    _input;
    constructor(editor, key, schema, data) {
        super(editor);
        this._schema = schema;
        this._data = data;
        this.class("string-component");
        const label = schema.label || key;
        if (schema.enum) {
            this._input = (0, duct_tape_1.create)("select", this)
                .style("display", "block")
                .style("marginBottom", "8px")
                .on("change", () => {
                this._data[key] = this._input.property("value");
                this._editor.saveState();
            });
            for (const [enumKey, enumLabel] of Object.entries(schema.enum)) {
                const option = (0, duct_tape_1.create)("option", this._input)
                    .attr("value", enumKey)
                    .text(enumLabel);
                if (this._data[key] === enumKey) {
                    option.attr("selected", "selected");
                }
                this._input.append(option);
            }
        }
        else {
            this._input = (0, duct_tape_1.create)("input", this)
                .attr("type", "text")
                .style("display", "block")
                .style("marginBottom", "8px")
                .property("value", this._data[key] || "")
                .on("input", () => {
                this._data[key] = this._input.property("value");
                this._editor.saveState();
            });
        }
        const labelNode = (0, duct_tape_1.create)("label", this)
            .text(label)
            .style("display", "block")
            .style("marginBottom", "4px");
        this.append(labelNode);
        this.append(this._input);
    }
}
exports.StringWidget = StringWidget;


/***/ },

/***/ 200
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Widget = void 0;
const duct_tape_1 = __webpack_require__(415);
class Widget extends duct_tape_1.DOMNode {
    _editor;
    constructor(editor) {
        super("div", editor);
        this._editor = editor;
    }
}
exports.Widget = Widget;


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.create = create;
const editor_1 = __webpack_require__(771);
__webpack_require__(166);
//TODO:
// [x] Czy init jest Promise? - TAK!
// [ ] Czy setState jest wywoływany zawsze?
// [ ] Czy addEditorTab można wywołać z setState?
// [ ] Co dzieje się z defaultData jeżeli zostanie coś dodane/usunięte
function create() {
    let _api = null;
    let _data = {};
    let editor = null;
    return {
        init(api, options) {
            _api = api;
            _api.addEditorTab("tab_data", "Edycja");
        },
        destroy() {
            // Cleanup code here
        },
        initTab(tabId, container, api) {
            if (tabId === "tab_data") {
                console.log("Initializing tab:", tabId);
                container.classList.add("oseditor-nmzzpp1hty");
                editor = new editor_1.Editor(container, api);
            }
        },
        destroyTab(tabId, container) {
            if (editor) {
                editor.dispose();
                editor = null;
            }
        },
        setState(stateData) {
            if (editor) {
                _data = stateData;
                editor.run(_data);
            }
            else {
                console.warn("Editor instance is not initialized yet.");
            }
        },
        getState() {
            return _data;
        }
    };
}
exports["default"] = create;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;