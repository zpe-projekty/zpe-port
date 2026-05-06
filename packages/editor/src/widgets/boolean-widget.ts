import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementBoolean } from "~/editor";
import { Widget } from "./widget";

export class BooleanWidget extends Widget {
    private _schema: SchemaElementBoolean;
    private _data: Record<string, any>;
    private _checkbox: DOMNode<"input">;

    constructor(editor: Editor, key: string, schema: SchemaElementBoolean, data: Record<string, any>) {
        super(editor);

        this._editor = editor;
        this._schema = schema;
        this._data = data;
        this.class("boolean-component");

        const label = schema.label || key;
        this._checkbox = create("input", this)
            .attr("type", "checkbox")
            .style("marginRight", "8px")
            .property("checked", !!this._data[key])
            .on("input", () => {
                this._data[key] = this._checkbox.property("checked");
                this._editor.saveState();
            });

        const labelNode = create("label", this)
            .style("cursor", "pointer")
            .append(this._checkbox)
            .append(create("span", this).text(label));

        this.append(labelNode);
    }
}