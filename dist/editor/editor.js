define(() => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;

    & button {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #007acc;
        color: #fff;
        gap: 0.3rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    input[type="text"],
    input[type="number"],
    select,
    textarea {
        width: 100%;
        padding: 0.25rem;
        border: solid 1px #aaa;
        border-radius: 0.25rem;
    }

    label {
        font-size: 0.75rem;
        font-weight: bold;
    }

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
        /* background-color: #eee; */
    }

    & .id-widget {
        display: none;
    }

    & .boolean-widget {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        & .checkbox {
            width: 1rem;
            height: 1rem;
            padding-left: 0.5rem;
        }
    }

    & .object-widget {
        /* border: solid 1px #f00; */
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & .title {
            background-color: #000;
            color: #fff;
            padding: 0.25rem;
        }

        & .content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            &.active {
                display: block;
            }
        }
    }

    .array-widget {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & .title {
            background-color: #000;
            color: #fff;
            padding: 0.25rem;
        }

        & .actions {
            display: flex;
            gap: 0.5rem;
        }

        & .content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            & .item {
                display: flex;
                flex-direction: row;
                background-color: #ddd;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-right: 0.5rem;
                /* gap: 0.5em; */

                & .item-header {
                    flex: 0 0 4rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 0.1rem;
                    border-right: solid 1px #aaa;

                    & .item-drag-handle {
                        cursor: grab;
                        user-select: none;
                        width: 2rem;
                        height: 2rem;
                        font-size: 1.5rem;
                        line-height: 1.5rem;
                        justify-content: center;
                        align-items: center;

                        &::before {
                            content: "☰";
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }

                    & .item-move-up,
                    & .item-move-down {
                        & button {
                            width: 2rem;
                            height: 2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }

                    & .item-index {
                        font-size: 0.75rem;
                        font-weight: bold;
                        padding: 0.5rem;
                    }
                }

                & .item-content {
                    flex: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                & .item-actions {
                    display: flex;
                    gap: 0.5rem;

                    & .remove-button {
                        background-color: #838383;

                        &::before {
                            content: "✖";
                            font-size: 1rem;
                        }
                        &:hover {
                            background-color: #db2828;
                        }
                    }
                }
            }
        }
    }

    & .string-widget {
        & .input-text {
        }
    }

    & .add-button {
        &::before {
            content: "+";
            font-size: 1rem;
            color: white;
        }

        &:hover {
            background-color: #21ba45;
        }
    }

    & .root-widget {
        background-color: #eee;
        padding: 0.1rem;
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  create: () => (/* binding */ main_create),
  "default": () => (/* binding */ main)
});

;// ./packages/editor/packages/duct-tape/src/common.ts
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
function common_hasOwnProperty(value, name) {
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

;// ./packages/editor/packages/duct-tape/src/disposable.ts

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
        if (isObject(o)) {
            if (hasOwnFunction(o, 'dispose')) {
                this._disposables.set(o, () => o.dispose());
            }
            else if (hasOwnFunction(o, 'destroy')) {
                this._disposables.set(o, () => o.destroy());
            }
            else if (hasOwnFunction(o, 'remove')) {
                this._disposables.set(o, () => o.remove());
            }
            else {
                console.warn(`The object ${o?.constructor?.name ?? o} has an unknown release function!`);
            }
        }
        else if (isFunction(o)) {
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
class DummyDisposable extends Disposable {
    constructor() {
        super();
    }
}

;// ./packages/editor/packages/duct-tape/src/to.ts

function toBoolean(value, defaultValue = false) {
    if (value instanceof value_Value) {
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
    if (value instanceof Value) {
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
function to_toString(value, defaultValue = '') {
    if (value instanceof Value) {
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

;// ./packages/editor/packages/duct-tape/src/value.ts



const ManualDispose = Symbol('ManualDispose');
function arrayEquals(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function createValue(value, owner) {
    return new ValueStore(value, owner);
}
class value_Value extends Disposable {
    _transformers = [];
    dispose() {
        if (this.disposed)
            return;
        for (const transformer of this._transformers) {
            transformer.dispose();
        }
        this._transformers.splice(0, this._transformers.length);
        super.dispose();
    }
    equal(test) {
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
        this._transformers.push(transformer);
        return transformer;
    }
    notEqual(test) {
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
        this._transformers.push(transformer);
        return transformer;
    }
    format(formatter) {
        const transformer = new ValueObserver(this, formatter);
        this._transformers.push(transformer);
        return transformer;
    }
    map(transformerFn) {
        const transformer = new ValueObserver(this, transformerFn);
        this._transformers.push(transformer);
        return transformer;
    }
    mapBoolean(trueValue, falseValue) {
        const transformer = new ValueObserver(this, (value) => {
            if (toBoolean(value) === true) {
                return trueValue;
            }
            else {
                return falseValue;
            }
        });
        this._transformers.push(transformer);
        return transformer;
    }
    not() {
        const transformer = new ValueObserver(this, (value) => !toBoolean(value));
        this._transformers.push(transformer);
        return transformer;
    }
    and(other) {
        const transformer = new ValueLogicObserver(this, other, (a, b) => toBoolean(a) && toBoolean(b));
        this._transformers.push(transformer);
        return transformer;
    }
    or(other) {
        const transformer = new ValueLogicObserver(this, other, (a, b) => toBoolean(a) || toBoolean(b));
        this._transformers.push(transformer);
        return transformer;
    }
}
function isValue(object) {
    return object instanceof value_Value;
}
class ValueStore extends value_Value {
    listeners = [];
    value;
    initValue;
    prev;
    _owner;
    constructor(value, owner) {
        super();
        this._owner = owner;
        this.value = value;
        this.initValue = value;
        this.prev = undefined;
        if (owner) {
            owner.register(this);
        }
    }
    dispose() {
        if (this.disposed)
            return;
        this.listeners.splice(0, this.listeners.length);
        if (this._owner) {
            this._owner.unregister(this);
            this._owner = undefined;
        }
        super.dispose();
    }
    subscribe(owner, callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        setTimeout(() => {
            this.deliveryValueToSubscriber(handle, this.value, this.prev);
        });
        const unsubscribe = () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
        if (owner && owner !== ManualDispose) {
            owner.register(unsubscribe);
        }
        return unsubscribe;
    }
    set(value) {
        this.prev = this.get();
        if (Array.isArray(this.value) && Array.isArray(value) && !arrayEquals(this.value, value)) {
            this.value = [...value];
            this.deliveryValue(this.value, this.prev);
        }
        else if (typeof this.value === 'object') {
            this.value = mergeDeep(this.value, value);
            this.deliveryValue(this.value, this.prev);
        }
        else if (this.value !== value) {
            this.value = value;
            this.deliveryValue(this.value, this.prev);
        }
    }
    get() {
        if (Array.isArray(this.value)) {
            return [...this.value];
        }
        else if (typeof this.value === 'object') {
            return mergeDeep({}, this.value);
        }
        return this.value;
    }
    toString() {
        return this.value === undefined || this.value === null
            ? 'undefined'
            : this.value.toString();
    }
    deliveryValue(value, prev) {
        setTimeout(() => {
            for (const handle of this.listeners) {
                this.deliveryValueToSubscriber(handle, value, prev);
            }
        });
    }
    deliveryValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}
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
class ValueObserver extends value_Value {
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
        this._unsubscribe = this.watch.subscribe(ManualDispose, (value) => {
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
    subscribe(owner, callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        setTimeout(() => {
            this.deliverValueToSubscriber(handle, this.value, this.prev);
        });
        const unsubscribe = () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
        if (owner && owner !== ManualDispose) {
            owner.register(unsubscribe);
        }
        return unsubscribe;
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
        setTimeout(() => {
            for (const handle of this.listeners) {
                this.deliverValueToSubscriber(handle, value, prev);
            }
        });
    }
    deliverValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}
class ValueLogicObserver extends value_Value {
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
        watch1.subscribe(this, (value) => {
            const newValue = this.transform(value, watch2.get());
            if (this.value !== newValue) {
                this.prev = this.value;
                this.value = newValue;
                this.deliverValue(this.value, this.prev);
            }
        });
        watch2.subscribe(this, (value) => {
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
    subscribe(owner, callback, scope = this) {
        const handle = {
            callback,
            scope,
        };
        this.listeners.push(handle);
        setTimeout(() => {
            this.deliverValueToSubscriber(handle, this.value, this.prev);
        });
        const unsubscribe = () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
        if (owner && owner !== ManualDispose) {
            owner.register(unsubscribe);
        }
        return unsubscribe;
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
        setTimeout(() => {
            for (const handle of this.listeners) {
                this.deliverValueToSubscriber(handle, value, prev);
            }
        });
    }
    deliverValueToSubscriber(handle, value, prev) {
        handle.callback.call(handle.scope, value, prev);
    }
}

;// ./packages/editor/packages/duct-tape/src/utils/console-colors.ts
/* console-colors.ts
   Minimalna biblioteka do kolorowania logów w konsoli przeglądarki (%c + CSS)
*/
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

;// ./packages/editor/packages/duct-tape/src/utils/log.ts

const log = createLogger({ namespace: "DUCT-TAPE", minLevel: "debug" });

;// ./packages/editor/packages/duct-tape/src/app.ts




var PageType;
(function (PageType) {
    PageType[PageType["Normal"] = 0] = "Normal";
    PageType[PageType["Background"] = 1] = "Background";
    PageType[PageType["Overlay"] = 2] = "Overlay";
})(PageType || (PageType = {}));
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
class App extends Disposable {
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
    _waitingModals = [];
    backgroundPages = [];
    overflowPages = [];
    _currentPage;
    pageId = new ValueStoreRaw(null);
    _isFocusPageLocked = false;
    isFullscreen = new ValueStoreRaw(false);
    static create(parent, store, config, options = {}) {
        return new App(parent, store, config, options);
    }
    constructor(parent, store, config, options = {}) {
        super();
        log.debug("Greetings from DuctTape Engine! 🥳");
        this.store = store;
        this.config = config;
        this._options = options;
        this._parent = parent;
        this.appDiv = create(this, "div").class(options.appClassName ?? [])
            .mount(this._parent);
        this.appContainer = create(this, "div").class(options.appContainerClassName ?? [])
            .mount(this.appDiv);
        if (options.backgroundContainerEnabled === true) {
            this.backgroundContainer = create(this, "div")
                .class(options.backgroundContainerClassName ?? [])
                .mount(this.appContainer);
        }
        this.pageContainer = create(this, "div").class(options.pageContainerClassName ?? [])
            .mount(this.appContainer);
        if (options.overflowContainerEnabled === true) {
            this.overflowContainer = create(this, "div").class(options.overflowContainerClassName ?? [])
                .mount(this.appContainer);
        }
        this.modalsContainer = create(this, "div").class(options.modalContainerClassName ?? [])
            .style("display", "none")
            .mount(this.appContainer);
        document.addEventListener("fullscreenchange", () => {
            const isFullscreen = !!document.fullscreenElement;
            this.isFullscreen.set(isFullscreen);
        });
    }
    dispose() {
        for (const [, service] of this._services) {
            try {
                service.dispose();
            }
            catch (error) {
                log.error(`Failed to dispose service:`, error);
            }
        }
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
        log.error(`Page with name "${name}" not found.`);
        return undefined;
    }
    registerPage(pageConstructor, type = PageType.Normal) {
        if (type === PageType.Background) {
            if (this._options.backgroundContainerEnabled !== true || !this.backgroundContainer) {
                log.error("Background container is not enabled in App options.");
                return;
            }
            for (const page of this.backgroundPages) {
                if (pageConstructor === page.constructor) {
                    log.error(`Background page "${pageConstructor.name}" is already added.`);
                    return;
                }
            }
            this.backgroundPageConstructors.push(pageConstructor);
        }
        else if (type === PageType.Overlay) {
            if (this._options.overflowContainerEnabled !== true || !this.overflowContainer) {
                log.error("Overflow container is not enabled in App options.");
                return;
            }
            for (const page of this.overflowPageConstructors) {
                if (pageConstructor === page) {
                    log.error(`Overflow page "${pageConstructor.name}" is already added.`);
                    return;
                }
            }
            this.overflowPageConstructors.push(pageConstructor);
        }
        else {
            if (this.pagesConstructors.includes(pageConstructor)) {
                log.error(`Page "${pageConstructor.name}" is already registered.`);
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
    savePageFocus() {
        const activeElement = document.activeElement;
        this.removeAllDataLastFocusedAttributes(this.currentPage?.element);
        this._currentPage?.element.contains(activeElement) && activeElement.setAttribute("data-last-focused", "true");
    }
    restorePageFocus() {
        const lastFocused = this.currentPage?.element.querySelector("[data-last-focused='true']");
        if (lastFocused) {
            lastFocused.focus();
            this.removeAllDataLastFocusedAttributes(this.currentPage?.element);
        }
    }
    saveModalFocus() {
        const activeElement = document.activeElement;
        const topModal = this.modals[this.modals.length - 1];
        this.removeAllDataLastFocusedAttributes(topModal?.element);
        topModal?.element.contains(activeElement) && activeElement.setAttribute("data-last-focused", "true");
    }
    restoreModalFocus() {
        const topModal = this.modals[this.modals.length - 1];
        const lastFocused = topModal?.element.querySelector("[data-last-focused='true']");
        if (lastFocused) {
            lastFocused.focus();
            this.removeAllDataLastFocusedAttributes(topModal?.element);
        }
    }
    removeAllDataLastFocusedAttributes(elem) {
        elem.querySelectorAll("[data-last-focused='true']").forEach(el => {
            el.removeAttribute("data-last-focused");
        });
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
        if (this._waitingModals.length > 0) {
            for (const { modal, resolve } of this._waitingModals) {
                await this.addModal(modal);
                resolve();
            }
            this._waitingModals = [];
        }
    }
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
    addModal(modal) {
        if (this.modals.includes(modal)) {
            return Promise.resolve();
        }
        // if there is no current page, we should wait until the page is loaded to show the modal
        if (this.currentPage === undefined) {
            return new Promise((resolve) => {
                this._waitingModals.push({ modal, resolve });
            });
        }
        return new Promise(async (resolve) => {
            if (this.modals.length === 0) {
                this.savePageFocus();
            }
            else {
                this.saveModalFocus();
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
            this.pageContainer.attr("aria-hidden", "true");
            resolve();
        });
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
        // if (this.modals.length > 0) {
        //     const focusableElements = this.modals[this.modals.length - 1].element.querySelectorAll<HTMLElement>(
        //         FOCUSABLE_ELEMENT_SELECTOR
        //     );
        //     if (focusableElements.length > 0) {
        //         focusableElements[0].focus();
        //     }
        // } else {
        //     // focus current page
        //     const focusableElements = this.getPageFocusableElements();
        //     if (focusableElements && focusableElements.length > 0) {
        //         focusableElements[0].focus();
        //     }
        // }
        if (this.modals.length > 0) {
            this.pageContainer.attr("aria-hidden", "false");
            this.restoreModalFocus();
        }
        else {
            this.restorePageFocus();
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

;// ./packages/editor/packages/duct-tape/src/dom.ts



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
function create(owner, selector) {
    const dom = DOMNode.create(owner, selector);
    return dom;
}
class DOMNode extends Disposable {
    _element = null;
    _events = new Map();
    _owner = null;
    static create(owner, selector) {
        const dom = new DOMNode(owner, selector);
        return dom;
    }
    constructor(owner, selector) {
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
        if (condition instanceof value_Value) {
            condition.subscribe(this, (cond) => {
                if (cond) {
                    if (value instanceof value_Value) {
                        value.subscribe(this, (val) => {
                            if (val === null || val === undefined || val === "") {
                                this._element.removeAttribute(name);
                            }
                            else {
                                this._element.setAttribute(name, String(val));
                            }
                        });
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
            });
        }
        else if (condition === true) {
            if (value instanceof value_Value) {
                value.subscribe(this, (val) => {
                    if (val === null || val === undefined || val === "") {
                        this._element.removeAttribute(name);
                    }
                    else {
                        this._element.setAttribute(name, String(val));
                    }
                });
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
            if (value instanceof value_Value) {
                value.subscribe(this, (v) => {
                    if (v === null || v === undefined || v === "" || condition === false) {
                        this._element.removeAttribute(name);
                    }
                    else {
                        this._element.setAttribute(name, String(v));
                    }
                });
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
        if (value instanceof value_Value) {
            value.subscribe(this, (val) => {
                this._element[name] = val;
            });
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
        if (condition instanceof value_Value) {
            condition.subscribe(this, (cond) => {
                if (cond) {
                    if (value instanceof value_Value) {
                        value.subscribe(this, (val) => {
                            this._element.style.setProperty(name, val);
                        });
                    }
                    else {
                        this._element.style.setProperty(name, value);
                    }
                }
                else {
                    this._element.style.removeProperty(name);
                }
            });
        }
        else if (condition === true || condition === undefined) {
            if (value instanceof value_Value) {
                value.subscribe(this, (val) => {
                    this._element.style.setProperty(name, val);
                });
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
        if (active instanceof value_Value) {
            active.subscribe(this, (val) => {
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
            });
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
        const dispose = createDisposeFn(() => {
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
        if (value instanceof value_Value) {
            value.subscribe(this, (val) => {
                this._element.dataset[name] = String(val);
            });
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
        if (content instanceof value_Value) {
            content.subscribe(this, (val) => {
                if (this.element instanceof HTMLElement) {
                    if (val === null || val === undefined) {
                        this._element.innerText = '';
                    }
                    else {
                        this._element.innerText = String(val);
                    }
                }
            });
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
        if (isVisible instanceof value_Value) {
            this._element.style.display = isVisible.get() ? '' : 'none';
            isVisible.subscribe(this, (visible) => {
                this._element.style.display = visible ? '' : 'none';
            });
        }
        else {
            this._element.style.display = isVisible ? '' : 'none';
        }
        return this;
    }
    visibility(isVisible) {
        if (isVisible instanceof value_Value) {
            isVisible.subscribe(this, (visible) => {
                this._element.style.visibility = visible ? 'visible' : 'hidden';
            });
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
    mount(parent, options) {
        if (parent instanceof DOMNode) {
            if (options?.first) {
                parent._element.insertBefore(this._element, parent._element.firstChild);
            }
            else {
                parent._element.appendChild(this._element);
            }
        }
        else {
            if (options?.first) {
                parent.insertBefore(this._element, parent.firstChild);
            }
            else {
                parent.appendChild(this._element);
            }
        }
        return this;
    }
    insertBefore(referenceNode) {
        const refElement = referenceNode instanceof DOMNode ? referenceNode._element : referenceNode;
        if (refElement.parentElement) {
            refElement.parentElement.insertBefore(this._element, refElement);
        }
        else {
            console.warn('Reference node has no parent. Cannot insert before it.', referenceNode);
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
    focusFirstElement(options) {
        if (this._element instanceof HTMLElement) {
            const firstFocusable = this._element.querySelector(FOCUSABLE_ELEMENT_SELECTOR);
            if (firstFocusable) {
                setTimeout(() => {
                    firstFocusable.focus(options);
                }, 100);
            }
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

;// ./packages/editor/packages/duct-tape/src/emitter.ts

class Emitter extends Disposable {
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
/* harmony default export */ const emitter = ((/* unused pure expression or super */ null && (Emitter)));

;// ./packages/editor/packages/duct-tape/src/page.ts

class Page extends DOMNode {
    _app;
    _store;
    _config;
    constructor(app, store, config) {
        super(null, "div");
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
        if (element instanceof DOMNode) {
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

;// ./packages/editor/packages/duct-tape/src/modal.ts

class Modal extends DOMNode {
    _app;
    _store;
    _config;
    _options;
    constructor(app, store, config, options) {
        super(null, "div");
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

;// ./packages/editor/packages/duct-tape/index.ts












;// ./packages/editor/src/widgets/widget.ts

class Widget extends DOMNode {
    _key;
    _editor;
    constructor(editor, key) {
        super(editor, "div");
        this._key = key;
        this._editor = editor;
        this.class("widget");
    }
    getKey() {
        return this._key;
    }
}

;// ./packages/editor/src/widgets/number-widget.ts


var NumberFormat;
(function (NumberFormat) {
    NumberFormat["Integer"] = "integer";
    NumberFormat["Float"] = "float";
    NumberFormat["Number"] = "number";
})(NumberFormat || (NumberFormat = {}));
class NumberWidget extends Widget {
    _schema;
    _format = NumberFormat.Number;
    _min = -Infinity;
    _max = Infinity;
    // private _data: Record<string, any>;
    _input;
    _messageNode;
    _value;
    constructor(editor, key, schema, value) {
        super(editor, key);
        this._value = value !== undefined ? value : schema.default ?? 0;
        this._editor = editor;
        this._schema = schema;
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
        this._input = create(this, "input")
            .attr("type", "number")
            .style("display", "block")
            .style("marginBottom", "8px")
            .property("value", this._value ?? 0)
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
            this._value = numValue;
            this._editor.saveState();
        });
        const labelNode = create(this, "label")
            .text(label)
            .style("display", "block")
            .style("marginBottom", "4px");
        this._messageNode = create(this, "div")
            .class("message")
            .style("color", "red")
            .style("fontSize", "12px")
            .style("marginBottom", "8px");
        this.append(labelNode, this._input, this._messageNode);
    }
    build() {
    }
    getValue() {
        const value = this._input.property("value");
        if (value === undefined || value === "") {
            return null;
        }
        let numValue;
        if (this._format === NumberFormat.Integer) {
            numValue = parseInt(value, 10);
        }
        else {
            numValue = parseFloat(value);
        }
        if (isNaN(numValue)) {
            return null;
        }
        return numValue;
    }
}

;// ./packages/editor/src/widgets/array-widget.ts




class ArrayWidget extends Widget {
    _schema;
    // private _data: any[];
    _itemsContainer;
    _items = [];
    _reorderable;
    _editable;
    _itemCounter = 0;
    _draggedItem = null;
    constructor(editor, key, schema, data) {
        super(editor, key);
        this._editor = editor;
        this._schema = schema;
        // this._data = data;
        this._reorderable = schema.reorderable ?? false;
        this._editable = schema.editable ?? true;
        this.class("array-widget");
        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;
            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }
            create(this, "div")
                .class("title")
                .text(titleText)
                .mount(this);
        }
        this.append(this._itemsContainer = create(this, "div")
            .class("content"));
        if (data && Array.isArray(data)) {
            data.forEach((itemData, index) => {
                const itemKey = `${key}[${index}]`;
                if (this._schema.item.type === "object") {
                    this.addItem(itemKey, itemData);
                }
                else {
                    console.warn(`Unsupported array item type: ${this._schema.item.type}`);
                }
            });
        }
        if (this._editable) {
            create(this, "div")
                .class("actions")
                .append(create(this, "button")
                .text("Dodaj element")
                .class("add-button")
                .on("click", () => {
                const newItemKey = `${key}[${this._itemCounter++}]`;
                if (this._schema.item.type === "object") {
                    this.addItem(newItemKey, UseDefaultData);
                }
                else {
                    console.warn(`Unsupported array item type: ${this._schema.item.type}`);
                }
            }))
                .mount(this);
        }
    }
    getValue() {
        const containerChildren = Array.from(this._itemsContainer.element.children);
        const orderedItems = this._items.slice().sort((a, b) => {
            const aIndex = containerChildren.indexOf(a.container.element);
            const bIndex = containerChildren.indexOf(b.container.element);
            return aIndex - bIndex;
        });
        return orderedItems.map(item => item.widget.getValue());
    }
    addItem(key, data) {
        const item = create(this, "div").class("item");
        this._itemsContainer.append(item);
        const itemHandle = create(item, "div")
            .class("item-header")
            .mount(item);
        if (this._reorderable) {
            create(item, "div")
                .class("item-move-up")
                .mount(itemHandle)
                .append(create(this, "button")
                .text("⬆")
                .on("click", () => {
                this.moveItemUp(key);
            }));
            create(item, "div")
                .class("item-drag-handle")
                .mount(itemHandle)
                .attr("draggable", "true")
                .on("dragstart", (event) => {
                const bounding = item.element.getBoundingClientRect();
                const x = event.clientX - bounding.left;
                const y = event.clientY - bounding.top;
                event.dataTransfer.setDragImage(item.element, x, y);
                event.dataTransfer.effectAllowed = "move";
                this._draggedItem = item;
                // item.style("opacity", "0");
            })
                .on("dragend", (event) => {
                this._draggedItem = null;
                item.style("opacity", "");
            });
            create(item, "div")
                .class("item-move-down")
                .mount(itemHandle)
                .append(create(this, "button")
                .text("⬇")
                .on("click", () => {
                this.moveItemDown(key);
            }));
            item
                .on("dragover", (event) => {
                if (this._draggedItem && this._draggedItem == item && this._draggedItem.element.parentElement === item.element.parentElement) {
                    item.style("opacity", "0");
                }
                if (this._draggedItem && this._draggedItem !== item && this._draggedItem.element.parentElement === item.element.parentElement) {
                    const targetBounding = item.element.getBoundingClientRect();
                    const draggedBounding = this._draggedItem.element.getBoundingClientRect();
                    // console.log("Drag over:", key, "targetBounding:", targetBounding, "draggedBounding:", draggedBounding);
                    if (draggedBounding.top > targetBounding.top) {
                        item.element.parentElement.insertBefore(this._draggedItem.element, item.element);
                    }
                    else {
                        item.element.parentElement.insertBefore(this._draggedItem.element, item.element.nextSibling);
                    }
                }
                event.preventDefault();
            })
                .on("drop", (event) => {
                event.preventDefault();
                this.updateItemOrder();
                this._editor.saveState();
            });
        }
        const itemIndex = create(item, "div")
            .class("item-index")
            .mount(itemHandle)
            .text(`${this._items.length + 1}`);
        const itemContent = create(item, "div")
            .class("item-content")
            .mount(item);
        const objectWidget = new ObjectWidget(this._editor, key, this._schema.item, data);
        this._items.push({
            key, widget: objectWidget, container: item, itemIndexNode: itemIndex
        });
        objectWidget.mount(itemContent);
        if (this._editable) {
            create(item, "div")
                .class("item-actions")
                .mount(item)
                .append(create(this, "button")
                .class("remove-button")
                .text("Usuń")
                .on("click", () => {
                this.removeItem(objectWidget);
            }));
        }
    }
    updateItemOrder() {
        const containerChildren = Array.from(this._itemsContainer.element.children);
        this._items.sort((a, b) => {
            const aIndex = containerChildren.indexOf(a.container.element);
            const bIndex = containerChildren.indexOf(b.container.element);
            return aIndex - bIndex;
        });
        this._items.forEach((item, index) => {
            if (item.itemIndexNode) {
                item.itemIndexNode.text(`${index + 1}`);
            }
        });
    }
    moveItemDown(key) {
        const index = this._items.findIndex(i => i.widget.getKey() === key);
        if (index < this._items.length - 1) {
            const currentItem = this._items[index];
            const nextItem = this._items[index + 1];
            this._itemsContainer.element.insertBefore(nextItem.container.element, currentItem.container.element);
            this._editor.saveState();
            this.updateItemOrder();
        }
    }
    moveItemUp(key) {
        const index = this._items.findIndex(i => i.widget.getKey() === key);
        if (index > 0) {
            const currentItem = this._items[index];
            const previousItem = this._items[index - 1];
            this._itemsContainer.element.insertBefore(currentItem.container.element, previousItem.container.element);
            this._editor.saveState();
            this.updateItemOrder();
        }
    }
    removeItem(item) {
        const itemIndex = this._items.findIndex(i => i.widget === item);
        if (itemIndex !== -1) {
            const itemNode = this._items[itemIndex].container;
            this._items.splice(itemIndex, 1);
            item.dispose();
            itemNode.dispose();
            this.updateItemOrder();
        }
    }
}

;// ./packages/editor/src/widgets/string-widget.ts


class StringWidget extends Widget {
    _schema;
    _value;
    _input;
    constructor(editor, key, schema, value) {
        super(editor, key);
        this._schema = schema;
        this.class("string-widget");
        this._value = value !== undefined ? value : schema.default ?? "";
        const label = schema.label || key;
        const labelNode = create(this, "label")
            .text(label)
            .mount(this);
        if (schema.enum) {
            this._input = create(this, "select")
                .class("input-select")
                .mount(this)
                .on("change", () => {
                this._value = this._input.property("value") || "";
                this._editor.saveState();
            });
            for (const [enumKey, enumLabel] of Object.entries(schema.enum)) {
                const option = create(this._input, "option")
                    .attr("value", enumKey)
                    .text(enumLabel);
                if (this._value === enumKey) {
                    option.attr("selected", "selected");
                }
                this._input.append(option);
            }
        }
        else {
            if (schema.multiline) {
                this._input = create(this, "textarea")
                    .class("input-textarea")
                    .attr("rows", typeof schema.multiline === "number" ? schema.multiline : 2)
                    .property("value", this._value)
                    .mount(this)
                    .on("input", () => {
                    this._value = this._input.property("value") || "";
                    this._editor.saveState();
                });
            }
            else {
                this._input = create(this, "input")
                    .attr("type", "text")
                    .class("input-text")
                    .property("value", this._value)
                    .mount(this)
                    .on("input", () => {
                    this._value = this._input.property("value") || "";
                    this._editor.saveState();
                });
            }
        }
        // this.append(labelNode);
        // this.append(this._input);
    }
    getValue() {
        return this._value;
    }
}

;// ./packages/editor/src/widgets/boolean-widget.ts


class BooleanWidget extends Widget {
    _schema;
    _checkbox;
    _value;
    constructor(editor, key, schema, value) {
        super(editor, key);
        this._value = value !== undefined ? value : schema.default ?? false;
        this._editor = editor;
        this._schema = schema;
        this.class("boolean-widget");
        const label = schema.label || key;
        this._checkbox = create(this, "input")
            .attr("type", "checkbox")
            .style("marginRight", "8px")
            .property("checked", this._value)
            .mount(this)
            .on("input", () => {
            this._value = Boolean(this._checkbox.property("checked")) || false;
            this._editor.saveState();
        });
        const labelNode = create(this, "label")
            .style("cursor", "pointer")
            .mount(this)
            .append(create(this, "span").text(label));
    }
    getValue() {
        return this._value;
    }
}

;// ./packages/editor/src/widgets/ref-widget.ts


const cache = new Map();
class RefWidget extends Widget {
    _schema;
    _data;
    _ref;
    constructor(editor, key, schema, data) {
        super(editor, key);
        this._schema = schema;
        this._data = data;
        this.class("ref-widget");
        const label = this._schema.label || key;
        this._ref = create(this, "div")
            .style("display", "block")
            .style("marginBottom", "8px");
        const labelNode = create(this, "label")
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
    getValue() {
        return null; // RefWidget does not have a direct value to return
    }
}

;// ./packages/editor/src/widgets/id-widget.ts

class IdWidget extends Widget {
    _schema;
    _value;
    constructor(editor, key, schema, value) {
        super(editor, key);
        this._schema = schema;
        this._value = value !== undefined ? value : crypto.randomUUID();
        this.class("id-widget");
        this.attr("data-id", this._value);
    }
    getValue() {
        return this._value;
    }
}

;// ./packages/editor/src/utils/id.ts
const existingIds = new Set();
function addId(id) {
    existingIds.add(id);
}
function createUniqueId() {
    let newId;
    do {
        newId = Date.now().toString(36);
    } while (existingIds.has(newId));
    existingIds.add(newId);
    return newId;
}

;// ./packages/editor/src/widgets/object-widget.ts










class ObjectWidget extends Widget {
    _schema;
    _data;
    _content;
    _widgets = [];
    constructor(editor, key, schema, data) {
        super(editor, key);
        this._schema = schema;
        this._data = data;
        this.class("object-widget");
        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;
            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }
            create(this, "div")
                .class("title")
                .text(titleText)
                .mount(this);
        }
        this.append(this._content = create(this, "div")
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
            if (this._data !== UseDefaultData && this._data[key] === undefined && prop.type !== "ref") {
                console.warn(`Data for key '${key}' is undefined.`);
                continue;
            }
            if (prop.private === true) {
                continue;
            }
            if (key.at(0) === "#") {
                // Skip keys that start with '#' (internal or special keys)
                continue;
            }
            if (prop.type === "string") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using empty string as fallback.`);
                }
                const value = this._data !== UseDefaultData ? this._data[key] : this._schema.properties[key].default || "";
                const childWidget = new StringWidget(this._editor, key, prop, value).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "number") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using 0 as fallback.`);
                }
                const value = this._data !== UseDefaultData ? this._data[key] : this._schema.properties[key].default || 0;
                const childWidget = new NumberWidget(this._editor, key, prop, value).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "boolean") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using false as fallback.`);
                }
                const value = this._data !== UseDefaultData ? this._data[key] : this._schema.properties[key].default || false;
                const childWidget = new BooleanWidget(this._editor, key, prop, value).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "object") {
                const dataObj = this._data[key] || null;
                if (dataObj !== null && typeof dataObj === "object") {
                    const childWidget = new ObjectWidget(this._editor, key, prop, dataObj).mount(this._content);
                    this._widgets.push(childWidget);
                }
            }
            else if (prop.type === "array") {
                const childWidget = new ArrayWidget(this._editor, key, prop, this._data[key] || []).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "ref") {
                const childWidget = new RefWidget(this._editor, key, prop, this._data).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "id") {
                let value;
                if (this._data === UseDefaultData || this._data[key] === undefined) {
                    value = createUniqueId();
                }
                else {
                    value = this._data[key];
                    addId(value); // Register the existing ID to avoid duplicates
                }
                const childWidget = new IdWidget(this._editor, key, prop, value).mount(this._content);
                this._widgets.push(childWidget);
            }
            else if (prop.type === "message") {
                const messageText = prop.message || "No message provided.";
                create(this._content, "div")
                    .class("message")
                    .text(messageText);
            }
            else {
                console.warn(`Unsupported schema type '${prop.type}' for key '${key}'.`);
            }
        }
    }
    getValue() {
        const result = {};
        for (const child of this._widgets) {
            try {
                if (child instanceof RefWidget) {
                    // Skip RefWidget as it does not have a direct value to return
                    continue;
                }
                result[child.getKey()] = child.getValue();
            }
            catch (error) {
                console.error(`Failed to get value for key '${child.getKey()}':`, error);
            }
        }
        return result;
    }
}

;// ./packages/editor/src/editor.ts


const UseDefaultData = { __useDefaultData: true };
class Editor extends Disposable {
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
                this._rootWidget = new ObjectWidget(this, "Root", propertiesSchema, this._data).mount(this._container);
                this._rootWidget.class("root-widget");
                resolve();
            }).catch((error) => {
                console.error("Error loading schema:", error);
                resolve();
            });
        });
    }
    getData() {
        return this._rootWidget ? this._rootWidget.getValue() : {};
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

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./packages/editor/src/styles/styles.css
var styles = __webpack_require__(425);
;// ./packages/editor/src/styles/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const styles_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./packages/editor/src/main.ts


//TODO:
// [x] Czy init jest Promise? - TAK!
// [ ] Czy setState jest wywoływany zawsze?
// [ ] Czy addEditorTab można wywołać z setState?
// [ ] Co dzieje się z defaultData jeżeli zostanie coś dodane/usunięte
function main_create() {
    let _api = null;
    // let _data: State = {};
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
                editor = new Editor(container, api);
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
                editor.run(stateData);
            }
            else {
                console.warn("Editor instance is not initialized yet.");
            }
        },
        getState() {
            return editor ? editor.getData() : {};
        }
    };
}
/* harmony default export */ const main = (main_create);

/******/ 	return __webpack_exports__;
/******/ })()
;
});;