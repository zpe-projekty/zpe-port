import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementBoolean } from "~/editor";
import { Widget } from "./widget";

export class BooleanWidget extends Widget {
    private _schema: SchemaElementBoolean;
    private _checkbox: DOMNode<"input">;
    private _value: boolean;

    constructor(editor: Editor, key: string, schema: SchemaElementBoolean, value: boolean) {
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
            })
            ;

        const labelNode = create(this, "label")
            .style("cursor", "pointer")
            .mount(this)
            .append(create(this, "span").text(label));
    }

    getValue(): any {
        return this._value;
    }
}