export type InitFn = (container: HTMLElement) => Promise<void>;
export type RunFn = (stateData: Record<string, any> | null, isFrozen: boolean) => void;
export type UnloadFn = () => Promise<void> | void;
export type DestroyFn = () => Promise<void> | void;
export interface Engine {
    init(container: Element, api: ExerciseApi, options: any): Promise<void>;
    destroy(container: Element): Promise<void>;
}
export interface Stateful {
    setState(stateData: any): void;
    getState(): any;
    setStateFrozen(isFrozen: boolean): void;
    getStateProgress(data: Record<string, any>): Record<string, any>;
}
interface ExerciseApi {
    triggerStateSave(): Promise<void>;
    triggerStateRestore(): Promise<void>;
    enginePath(path: string): string;
    dataPath(path: string): string;
    loadCss(realPath: string): Promise<void>;
    typesetMath(dom: Element): Promise<void>;
    embedWidget(container: Element, manifest: string | object, widgetOptions: object): Promise<void>;
    createWidgetSlot(container: Element, slotName: string, slotOptions: object, widgetOptions: object): Promise<void>;
    isWidgetSlotFilled(slotName: string): Promise<boolean>;
    openGallery(images: string[]): Promise<void>;
    requestFullscreen(container: Element, onFullscreenExit: () => void): Promise<void>;
    toggleFullscreen(container: Element, onFullscreenExit: () => void): Promise<void>;
    exitFullscreen(): Promise<void>;
    inputFocusIn(input: Element): void;
    inputFocusOut(input: Element): void;
    uploadFile(fileId: string, file: File | Blob): Promise<void>;
    removeUploadedFile(fileId: string): Promise<void>;
    removeUploadedFiles(): Promise<void>;
}
declare function create(initFn: InitFn, runFn: RunFn, unloadFn: UnloadFn, destroyFn: DestroyFn): () => Engine & Stateful;
declare function path(relativePath: string): string;
declare function getData(): Record<string, any>;
declare function getState(): Promise<Record<string, any> | null>;
declare function setState(stateData: Record<string, any>): Promise<void>;
export { create, path, getData, getState, setState };
