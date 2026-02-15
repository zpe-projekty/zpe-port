/******/ "use strict";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export define */
document.body.onchange = () => {
    console.log("Body changed");
};
const zpeHeader = document.getElementById("zpe-emulator-header");
const zpeSidebar = document.getElementById("zpe-emulator-sidebar");
const zpeTitle = document.getElementById("zpe-emulator-title");
const zpeText = document.getElementById("zpe-emulator-text");
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function isTrueParam(param) {
    const value = getUrlParameter(param)?.toLowerCase();
    return value !== undefined && ["1", "yes", "true"].includes(value);
}
function define(fn) {
    const entry = fn().default();
    const container = document.getElementById("zpe-emulator-container");
    const api = {
        enginePath: (path) => path,
        loadCss: (path) => {
            return Promise.resolve();
        },
        triggerStateSave: async () => {
            return new Promise((resolve) => {
                console.log("State save triggered");
                setTimeout(() => {
                    const state = entry.getState();
                    console.log("Saved state:", state);
                    resolve();
                }, 200);
            });
        },
        triggerStateRestore: async () => {
            return new Promise((resolve) => {
                console.log("State restore triggered");
                callSetState(null).then(() => {
                    resolve();
                });
            });
        }
    };
    const options = {};
    function callSetState(state) {
        return new Promise((resolve) => {
            setTimeout(() => {
                entry.setState(state);
                resolve();
            }, 200);
        });
    }
    fetch("engine.json").then(response => response.json()).then(async (engineManifest) => {
        console.log(engineManifest);
        options.data = engineManifest?.editor?.defaultData || {};
    }).then(() => {
        entry.init(container, api, options).then(() => {
            console.log("Engine initialized");
            // const lastState = localStorage.getItem("emulator-last-state");
            return fetch("savedata.json").then(response => {
                response.text().then(text => {
                    const lastState = (text.trim().startsWith("null") || text.trim().startsWith("undefined") || text.trim() === "") ? undefined : JSON.parse(text);
                    callSetState(lastState).then(() => {
                        console.log("Engine running");
                    });
                });
            });
        });
    });
}
if (isTrueParam("compact") || localStorage.getItem("emulator-compact-mode") === "true") {
    zpeHeader.style.display = "none";
    zpeSidebar.style.display = "none";
    zpeTitle.style.display = "none";
    zpeText.style.display = "none";
}
// Developer panel
const devPanel = document.createElement("div");
devPanel.style.position = "fixed";
devPanel.style.bottom = "50px";
devPanel.style.right = "10px";
devPanel.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
devPanel.style.color = "white";
devPanel.style.padding = "10px";
devPanel.style.borderRadius = "5px";
devPanel.style.zIndex = "10000";
devPanel.style.display = "none";
const devButton = document.createElement("button");
devButton.textContent = "Dev Panel";
devButton.style.position = "fixed";
devButton.style.bottom = "10px";
devButton.style.right = "10px";
devButton.style.zIndex = "10001";
devButton.onclick = () => {
    devPanel.style.display = devPanel.style.display === "none" ? "block" : "none";
};
document.body.appendChild(devButton);
const compactToggle = document.createElement("button");
compactToggle.textContent = "Toggle Compact Mode";
compactToggle.style.marginRight = "10px";
compactToggle.onclick = () => {
    const isCompact = zpeHeader.style.display === "none";
    if (isCompact) {
        zpeHeader.style.display = "";
        zpeSidebar.style.display = "";
        zpeTitle.style.display = "";
        zpeText.style.display = "";
    }
    else {
        zpeHeader.style.display = "none";
        zpeSidebar.style.display = "none";
        zpeTitle.style.display = "none";
        zpeText.style.display = "none";
    }
    localStorage.setItem("emulator-compact-mode", (!isCompact).toString());
};
devPanel.appendChild(compactToggle);
document.body.appendChild(devPanel);


//# sourceMappingURL=emulator.js.map