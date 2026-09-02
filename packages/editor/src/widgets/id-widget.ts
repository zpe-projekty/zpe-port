import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementString, SchemaElementId } from "~/editor";
import { Widget } from "./widget";
import { RefWidget } from "./ref-widget";

export class IdWidget extends Widget {
    private _schema: SchemaElementId;
    private _value: string;

    constructor(editor: Editor, key: string, schema: SchemaElementId, value: string) {
        super(editor, key);

        this._schema = schema;
        this._value = value !== undefined ? value : crypto.randomUUID();

        this.class("id-widget");
        this.attr("data-id", this._value);

        if (this._schema.path) {
            this.class("has-ref-widget");
            this.register(new RefWidget(editor, "question1", {
                type: "ref",
                path: this._schema.path,
            }, {
                "id": this._value
            }).mount(this));
        }
    }

    getValue(): any {
        return this._value;
    }
}