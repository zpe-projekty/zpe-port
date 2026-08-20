import { create, DOMNode } from "@/duct-tape";
import { Editor } from "~/editor";

export abstract class Widget extends DOMNode<"div"> {
    protected _key: string;
    protected _editor: Editor;

    constructor(editor: Editor, key: string) {
        super(editor, "div");

        this._key = key;
        this._editor = editor;

        this.class("widget");
    }

    getKey(): string {
        return this._key;
    }

    abstract getValue(): any;
}