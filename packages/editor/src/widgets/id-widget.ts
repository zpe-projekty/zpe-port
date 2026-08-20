import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementString, SchemaElementId } from "~/editor";
import { Widget } from "./widget";

export class IdWidget extends Widget {
    private _schema: SchemaElementId;
    private _value: string;

    constructor(editor: Editor, key: string, schema: SchemaElementId, value: string) {
        super(editor, key);

        this._schema = schema;
        this._value = value !== undefined ? value : crypto.randomUUID();

        this.class("id-widget");
        this.attr("data-id", this._value);
    }

    getValue(): any {
        return this._value;
    }
}