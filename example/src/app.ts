import { getData, path, setState } from "@/zpe-port";
import * as styles from "./styles/style.css";
import { Rebus } from "./rebus";
import { State } from "./state";

interface Scenario {
    rebuses: Record<string, ScenarioRebus>;
}

interface ScenarioRebus {
    imagePath: string;
    answer: string;
    hint?: string;
}

interface Data {
    message: string;
    playTime: number;
    rebuses: DataRebus[];
}

interface DataRebus {
    id: string;
    enabled: boolean;
}

export const state = new State();

const _elements: HTMLElement[] = [];
const _rebuses: Rebus[] = [];
let _container: HTMLElement;
let _wrapper: HTMLElement;
let _destroyed: boolean = false;
let _scenario: Scenario;

export function init(container: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
        _container = container;

        _wrapper = document.createElement("div");
        _wrapper.className = styles.wrapper;
        _container.appendChild(_wrapper);

        _wrapper.appendChild(createText(getData().message || "No message found in data.", styles.header));

        fetch(path("scenario.json")).then((response) => response.json()).then((scenario: Scenario) => {
            _scenario = scenario;
            // Inicjalizuje stan gry, ustawiając puste odpowiedzi dla wszystkich rebusów
            const emptyState: Record<string, any> = {};
            const data = getData() as Data;
            for (const rebusData of data.rebuses) {
                emptyState[`${rebusData.id}`] = "";
            }

            state.set(emptyState);
        });

        resolve();
    });
}

export function run(stateData: Record<string, any> | null, isFrozen: boolean): Promise<void> {
    console.log("Running with state:", stateData);

    state.set(stateData || {});

    const data = getData() as Data;

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

export function unload(): Promise<void> {
    _rebuses.forEach((rebus) => rebus.dispose());
    _rebuses.length = 0;
    _elements.forEach((el) => el.remove());
    _elements.length = 0;
    return Promise.resolve();
}

export function destroy(): Promise<void> {
    _destroyed = true;

    return Promise.resolve();
}

function createText(text: string, className?: string): HTMLElement {
    const el = document.createElement("div");
    el.innerText = text;
    if (className) {
        el.className = className;
    }
    _elements.push(el);

    return el;
}


