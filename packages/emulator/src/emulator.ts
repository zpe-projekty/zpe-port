

document.body.onchange = () => {
    console.log("Body changed");
}

const zpeHeader = document.getElementById("zpe-emulator-header") as HTMLElement;
const zpeSidebar = document.getElementById("zpe-emulator-sidebar") as HTMLElement;
const zpeTitle = document.getElementById("zpe-emulator-title") as HTMLElement;
const zpeText = document.getElementById("zpe-emulator-text") as HTMLElement;

function getUrlParameter(name: string): string | null {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function isTrueParam(param: string): boolean {
    const value = getUrlParameter(param)?.toLowerCase();
    return value !== undefined && ["1", "yes", "true"].includes(value);
}

export function define(fn: () => any) {

    const entry = fn().default();
    const container = document.getElementById("zpe-emulator-container") as HTMLElement;
    const api = {
        enginePath: (path: string) => path,

        triggerStateSave: async (): Promise<void> => {
            return new Promise((resolve) => {
                console.log("State save triggered");
                setTimeout(() => {
                    const state = entry.getState()
                    console.log("Saved state:", state);
                    resolve();
                }, 200);
            });
        },
        triggerStateRestore: async (): Promise<void> => {
            return new Promise((resolve) => {
                console.log("State restore triggered");
                callSetState(null).then(() => {
                    resolve();
                });
            });
        }
    } as any;
    const options = {} as any;

    function callSetState(state: any): Promise<void> {
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

if (isTrueParam("compact")) {
    zpeHeader.style.display = "none";
    zpeSidebar.style.display = "none";
    zpeTitle.style.display = "none";
    zpeText.style.display = "none";
}