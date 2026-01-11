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

/***/ 448
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Cl: () => (/* binding */ _1),
/* harmony export */   Ww: () => (/* binding */ incorrect),
/* harmony export */   aK: () => (/* binding */ hint),
/* harmony export */   d4: () => (/* binding */ correct),
/* harmony export */   iE: () => (/* binding */ wrapper),
/* harmony export */   wx: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.style__wrapper--JbcRP {
    background-color: white;
}

.style__header--zi_I1 {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    font-size: 1.75rem;
    font-weight: bold;
}

.style__answer-input--GqyNt {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
}

.style__hint--yTyMz {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #555;
    font-style: italic;
}

.style__correct--mHjnH {
    background-color: rgb(205, 255, 130) !important;
}

.style__incorrect--nx_mc {
    background-color: rgb(255, 162, 162) !important;
}
`, ""]);
// Exports
var wrapper = `style__wrapper--JbcRP`;
var header = `style__header--zi_I1`;
var _1 = `style__answer-input--GqyNt`;

var hint = `style__hint--yTyMz`;
var correct = `style__correct--mHjnH`;
var incorrect = `style__incorrect--nx_mc`;
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
  "default": () => (/* binding */ main)
});

;// ./packages/zpe-port/build/zpe.js
let _container;
let _exerciseApi;
let _engineOptions;
let _data;
let _state = null;
let _isStateRestored = false;
let _isFrozen = false;
let _isRunning = false;
// Główna funkcja starująca aplikację.
// Aplikacja pracuje jako biblioteka AMD wywoływana przez platformę.
// Przykład użycia:
//
// plik src/index.ts:
// 
// import * as ZPE from "./zpe";
// import { init, destroy } from "./app";
//
// export default ZPE.create(init, run, destroy, unload);
//
// gdzie:
//   init - funkcja inicjalizująca aplikację. Przyjmuje kontener HTML jako argument i zwraca Promise który
//          rozwiązuje się gdy aplikacja jest gotowa do użycia.
//   destroy - funkcja sprzątająca zasoby przy niszczeniu aplikacji
//
// 1. Razem z funkcją init przekazwyana jest kontener HTML. Tylko w nim aplikacja może tworzyć swoje elementy.
// 2. Funkcja init musi zwracać Promise, który powinien się rozwiązać gdy aplikacja jest gotowa do użycia.
// 3. Funkcja destroy jest wywoływana przy niszczeniu aplikacji i powinna posprzątać zasoby (usunąć elementy z DOM itp.)
function create(initFn, runFn, unloadFn, destroyFn) {
    if (!initFn) {
        throw new Error("Init function is required to create the engine.");
    }
    if (!runFn) {
        throw new Error("Run function is required to create the engine.");
    }
    if (!unloadFn) {
        throw new Error("Unload function is required to create the engine.");
    }
    if (!destroyFn) {
        throw new Error("Destroy function is required to create the engine.");
    }
    return function () {
        return {
            init: (container, api, options) => {
                return new Promise((resolve) => {
                    log("ZPE initializing engine with options:", options);
                    _container = container;
                    _exerciseApi = api;
                    _engineOptions = options;
                    _data = _engineOptions.data || {};
                    log("Hello, Engine!", _data, options);
                    initFn(container).then(() => {
                        resolve();
                    }).catch((e) => {
                        log("Error during init:", e);
                        resolve();
                    });
                });
            },
            destroy: () => {
                return Promise.resolve().then(() => {
                    log("ZPE destroying engine.");
                    try {
                        const result = unloadFn();
                        if (result instanceof Promise) {
                            return result;
                        }
                    }
                    catch (e) {
                        log("Error during unload:", e);
                    }
                    return Promise.resolve();
                }).then(() => {
                    try {
                        const result = destroyFn();
                        if (result instanceof Promise) {
                            return result;
                        }
                    }
                    catch (e) {
                        log("Error during destroy:", e);
                    }
                    return Promise.resolve();
                }).then(() => {
                    log("ZPE engine destroyed.");
                });
            },
            setState(stateData) {
                log("ZPE setting state:", stateData);
                _state = typeof stateData === "object" ? stateData : null;
                _isStateRestored = true;
                _isFrozen = false;
                waitForFrozenOrTimeout(1000).then(() => {
                    if (_isRunning && unloadFn) {
                        try {
                            const result = unloadFn();
                            if (result instanceof Promise) {
                                return result;
                            }
                        }
                        catch (e) {
                            log("Error during unload:", e);
                        }
                    }
                    return Promise.resolve();
                }).then(() => {
                    log("ZPE running engine with state:", _state, "frozen:", _isFrozen);
                    try {
                        runFn(structuredClone(_state), _isFrozen);
                    }
                    catch (e) {
                        log("Error during run:", e);
                    }
                    _isRunning = true;
                });
            },
            getState() {
                log("ZPE getting state:", _state);
                return _state;
            },
            setStateFrozen(value) {
                _isFrozen = value;
                log("Setting state frozen:", _isFrozen);
            },
            getStateProgress(data) {
                log("Getting state progress with data:", data);
                return {};
            }
        };
    };
}
function log(...args) {
    console.log("[ZPEPort]", ...args);
}
// function waitForStateRestore(): Promise<void> {
//     return new Promise((resolve) => {
//         if (_isStateRestored) {
//             resolve();
//         } else {
//             const checkInterval = setInterval(() => {
//                 if (_isStateRestored) {
//                     clearInterval(checkInterval);
//                     resolve();
//                 }
//             }, 100);
//         }
//     });
// }
// function wait(ms: number): Promise<void> {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
function waitForFrozenOrTimeout(ms) {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            resolve();
        }, ms);
        const checkInterval = setInterval(() => {
            if (_isFrozen) {
                clearInterval(timeout);
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
    });
}
// Zwraca pełną ścieżkę do zasobu wewnątrz silnika na podstawie ścieżki względnej
// np. path("img/image.png") zwróci coś w stylu "https://example.com/engine/img/image.png"
function path(relativePath) {
    return _exerciseApi.enginePath(relativePath);
}
// Zwraca dane zmienne (te które moe zmieniać nauczyciel podczas tworzenia ćwiczenia)
// Jeeli nauczyciel nic nie zmienił, zwraca dane domyślne które znajdują się w engine.json 
// w sekcji "editor/defaultData"
function getData() {
    return structuredClone(_data);
}
// Zwraca stan ćwiczenia (np. odpowiedzi ucznia) które zostały zapisane wcześniej
// za pomocą setState. Jeżeli nie ma zapisanego stanu, zwraca null
function getState() {
    return _exerciseApi.triggerStateRestore().then(() => {
        log("State restored.");
        return _state;
    });
}
;
// Ustawia stan ćwiczenia (np. odpowiedzi ucznia) które zostaną przywrócone w ćwiczeniu
// Jeżeli stan jest nieprawidłowy lub pusty, ćwiczenie powinno zainicjować się w stanie domyślnym
function setState(stateData) {
    if (_isFrozen) {
        log("State is frozen, returning null.");
        return Promise.resolve();
    }
    _state = stateData;
    return _exerciseApi.triggerStateSave();
}

//# sourceMappingURL=zpe.js.map
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/style.css
var style = __webpack_require__(448);
;// ./src/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Ay, options);




       /* harmony default export */ const styles_style = (style/* default */.Ay && style/* default */.Ay.locals ? style/* default */.Ay.locals : undefined);

;// ./src/rebus.ts

class Rebus {
    _disposed = false;
    _id;
    _state;
    _container;
    _imagePath;
    _answer;
    _imageElement;
    _inputElement;
    _hintElement;
    constructor(id, container, state, options) {
        this._id = id;
        this._container = container;
        this._state = state;
        this._imagePath = options.imagePath;
        this._answer = options.answer;
        this._imageElement = document.createElement("img");
        this._imageElement.src = this._imagePath;
        this._container.appendChild(this._imageElement);
        this._inputElement = document.createElement("input");
        this._inputElement.type = "text";
        this._inputElement.placeholder = "Wpisz odpowiedź tutaj";
        this._inputElement.className = style/* answer-input */.Cl;
        this._inputElement.value = this._state.get()[this._id] || "";
        this._container.appendChild(this._inputElement);
        if (options.hint) {
            const hintElement = document.createElement("div");
            hintElement.className = style/* hint */.aK;
            hintElement.innerText = options.hint;
            this._container.appendChild(hintElement);
            this._hintElement = hintElement;
        }
        this.checkAnswer();
        this._inputElement.addEventListener("change", () => {
            this.checkAnswer();
        });
        // this._inputElement.addEventListener("focus", () => {
        //     this.checkAnswer();
        // });
        this._inputElement.addEventListener("blur", () => {
            this._state.set({ [this._id]: this._inputElement.value });
        });
        this._inputElement.addEventListener("input", () => {
            this.checkAnswer();
        });
    }
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        if (this._hintElement) {
            this._hintElement.remove();
            this._hintElement = undefined;
        }
        this._imageElement.remove();
        this._inputElement.remove();
        this._imageElement = null;
        this._inputElement = null;
    }
    getId() {
        return this._id;
    }
    // getAnswer(): string {
    //     return this._inputElement.value;
    // }
    // setAnswer(answer: string): void {
    //     this._inputElement.value = answer;
    //     this.checkAnswer();
    // }
    isCorrectAnswer() {
        return this._inputElement.value.trim().toLowerCase() === this._answer.toLowerCase();
    }
    checkAnswer() {
        if (document.activeElement === this._inputElement) {
            if (this.isCorrectAnswer()) {
                this._inputElement.classList.add(style/* correct */.d4);
                this._state.set({ [this._id]: this._inputElement.value });
            }
            else {
                this._inputElement.classList.remove(style/* correct */.d4);
                this._inputElement.classList.remove(style/* incorrect */.Ww);
            }
        }
        else {
            if (this._inputElement.value.trim() === "") {
                this._inputElement.classList.remove(style/* correct */.d4);
                this._inputElement.classList.remove(style/* incorrect */.Ww);
            }
            else {
                if (this.isCorrectAnswer()) {
                    this._inputElement.classList.add(style/* correct */.d4);
                    this._inputElement.classList.remove(style/* incorrect */.Ww);
                }
                else {
                    this._inputElement.classList.add(style/* incorrect */.Ww);
                    this._inputElement.classList.remove(style/* correct */.d4);
                }
            }
        }
    }
}

;// ./src/state.ts
function isObject(value) {
    return value !== undefined && typeof value === "object" && !Array.isArray(value);
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
function equalDeep(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor)
            return false;
        let length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!equalDeep(a[i], b[i]))
                    return false;
            return true;
        }
        if ((a instanceof Map) && (b instanceof Map)) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            for (i of a.entries())
                if (!equalDeep(i[1], b.get(i[0])))
                    return false;
            return true;
        }
        if ((a instanceof Set) && (b instanceof Set)) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            return true;
        }
        if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            const key = keys[i];
            if (!equalDeep(a[key], b[key]))
                return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
}
;
class State {
    listeners = [];
    state;
    initState;
    prev;
    constructor(value = {}) {
        this.state = value;
        this.initState = value;
        this.prev = undefined;
    }
    destroy() {
        this.listeners = [];
    }
    subscribe(callback, scope = this) {
        const handle = {
            callback,
            scope
        };
        this.listeners.push(handle);
        // this.deliveryValueToSubscriber(handle, this.state, this.prev);
        return () => {
            this.listeners.splice(this.listeners.indexOf(handle), 1);
        };
    }
    get() {
        return mergeDeep({}, this.state);
    }
    set(value) {
        const newState = mergeDeep({}, this.state, value);
        if (equalDeep(this.state, newState)) {
            return;
        }
        const oldState = this.state;
        this.prev = oldState;
        this.state = newState;
        const tempNewState = mergeDeep({}, this.state);
        const tempOldState = mergeDeep({}, this.prev);
        this.listeners.forEach((handle) => {
            this.deliveryValueToSubscriber(handle, tempNewState, tempOldState);
        });
    }
    reset() {
        this.set(this.initState);
    }
    deliveryValueToSubscriber(handle, newValue, oldValue) {
        handle.callback.call(handle.scope, newValue, oldValue);
    }
}

;// ./src/app.ts




const state = new State();
const _elements = [];
const _rebuses = [];
let app_container;
let _wrapper;
let _destroyed = false;
let _scenario;
function init(container) {
    return new Promise((resolve) => {
        app_container = container;
        _wrapper = document.createElement("div");
        _wrapper.className = style/* wrapper */.iE;
        app_container.appendChild(_wrapper);
        _wrapper.appendChild(createText(getData().message || "No message found in data.", style/* header */.wx));
        fetch(path("scenario.json")).then((response) => response.json()).then((scenario) => {
            _scenario = scenario;
            // Inicjalizuje stan gry, ustawiając puste odpowiedzi dla wszystkich rebusów
            const emptyState = {};
            const data = getData();
            for (const rebusData of data.rebuses) {
                emptyState[`${rebusData.id}`] = "";
            }
            state.set(emptyState);
        });
        resolve();
    });
}
function run(stateData, isFrozen) {
    console.log("Running with state:", stateData);
    state.set(stateData || {});
    const data = getData();
    for (const rebusData of data.rebuses) {
        if (!rebusData.enabled) {
            continue;
        }
        const scenarioRebus = _scenario.rebuses[rebusData.id];
        if (!scenarioRebus) {
            console.warn(`Rebus with id ${rebusData.id} not found in scenario.`);
            continue;
        }
        const rebus = new Rebus(rebusData.id, _wrapper, state, {
            imagePath: path(scenarioRebus.imagePath),
            answer: scenarioRebus.answer,
            hint: scenarioRebus.hint
        });
        _rebuses.push(rebus);
    }
    state.subscribe(() => {
        setState(state.get()).then(() => {
            console.log("State saved.");
        });
    });
    return Promise.resolve();
}
function unload() {
    _rebuses.forEach((rebus) => rebus.dispose());
    _rebuses.length = 0;
    _elements.forEach((el) => el.remove());
    _elements.length = 0;
    return Promise.resolve();
}
function destroy() {
    _destroyed = true;
    return Promise.resolve();
}
function createText(text, className) {
    const el = document.createElement("div");
    el.innerText = text;
    if (className) {
        el.className = className;
    }
    _elements.push(el);
    return el;
}

;// ./src/main.ts


// Główna funkcja eksportowana do ZPE
// Inicjalizuje, uruchamia i niszczy aplikację
/* harmony default export */ const main = (create(init, run, unload, destroy));

/******/ 	return __webpack_exports__;
/******/ })()
;
});;