let _container;
let _exerciseApi;
let _engineOptions;
let _data;
let _state = null;
let _isStateRestored = false;
let _isFrozen = false;
let _isRunning = false;
// Główna funkcja startująca aplikację.
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
// 1. Razem z funkcją init przekazywana jest kontener HTML. Tylko w nim aplikacja może tworzyć swoje elementy.
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
                    console.log(logH(), "ZPE initializing engine with options:", options);
                    _container = container;
                    _exerciseApi = api;
                    _engineOptions = options;
                    _data = _engineOptions.data || {};
                    console.log(logH(), "Hello, Engine!", _data, options);
                    initFn(container).then(() => {
                        resolve();
                    }).catch((e) => {
                        console.log(logH(), "Error during init:", e);
                        resolve();
                    });
                });
            },
            destroy: () => {
                return Promise.resolve().then(() => {
                    console.log(logH(), "ZPE destroying engine.");
                    try {
                        const result = unloadFn();
                        if (result instanceof Promise) {
                            return result;
                        }
                    }
                    catch (e) {
                        console.log(logH(), "Error during unload:", e);
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
                        console.log(logH(), "Error during destroy:", e);
                    }
                    return Promise.resolve();
                }).then(() => {
                    console.log(logH(), "ZPE engine destroyed.");
                });
            },
            setState(stateData) {
                console.log(logH(), "ZPE setting state:", stateData);
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
                            console.log(logH(), "Error during unload:", e);
                        }
                    }
                    return Promise.resolve();
                }).then(() => {
                    console.log(logH(), "ZPE running engine with state:", _state, "frozen:", _isFrozen);
                    try {
                        runFn(structuredClone(_state), _isFrozen);
                    }
                    catch (e) {
                        console.log(logH(), "Error during run:", e);
                    }
                    _isRunning = true;
                });
            },
            getState() {
                console.log(logH(), "ZPE getting state:", _state);
                return _state;
            },
            setStateFrozen(value) {
                _isFrozen = value;
                console.log(logH(), "Setting state frozen:", _isFrozen);
            },
            getStateProgress(data) {
                console.log(logH(), "Getting state progress with data:", data);
                return {};
            }
        };
    };
}
function logH() {
    return "[ZPEPort]";
}
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
    if (!_exerciseApi) {
        console.error(logH(), "You must call path after the engine is initialized.");
        return "";
    }
    return _exerciseApi.enginePath(relativePath);
}
// Ładuje plik CSS do dokumentu na podstawie ścieżki względnej wewnątrz silnika
function loadCss(relativePath) {
    if (!_exerciseApi) {
        console.error(logH(), "You must call loadCss after the engine is initialized.");
        return Promise.reject(new Error("Engine not initialized"));
    }
    return _exerciseApi.loadCss(_exerciseApi.enginePath(relativePath));
}
// Zwraca dane zmienne (te które moe zmieniać nauczyciel podczas tworzenia ćwiczenia)
// Jeżeli nauczyciel nic nie zmienił, zwraca dane domyślne które znajdują się w engine.json 
// w sekcji "editor/defaultData"
function getData() {
    return structuredClone(_data);
}
// Zwraca stan ćwiczenia (np. odpowiedzi ucznia) które zostały zapisane wcześniej
// za pomocą setState. Jeżeli nie ma zapisanego stanu, zwraca null
function getState() {
    if (!_exerciseApi) {
        console.error(logH(), "You must call getState after the engine is initialized.");
        return Promise.resolve(null);
    }
    return _exerciseApi.triggerStateRestore().then(() => {
        console.log(logH(), "State restored.");
        return _state;
    });
}
;
// Ustawia stan ćwiczenia (np. odpowiedzi ucznia) które zostaną przywrócone w ćwiczeniu
// Jeżeli stan jest nieprawidłowy lub pusty, ćwiczenie powinno zainicjować się w stanie domyślnym
function setState(stateData) {
    if (_isFrozen) {
        console.log(logH(), "State is frozen, returning null.");
        return Promise.resolve();
    }
    _state = stateData;
    return _exerciseApi.triggerStateSave();
}
export { create, path, loadCss, getData, getState, setState };
//# sourceMappingURL=zpe.js.map