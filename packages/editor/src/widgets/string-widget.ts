import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementString } from "~/editor";
import { Widget } from "./widget";

export class StringWidget extends Widget {
    private _schema: SchemaElementString;
    private _value: string;
    private _input: DOMNode<"input"> | DOMNode<"select">;

    constructor(editor: Editor, key: string, schema: SchemaElementString, value: string) {
        super(editor, key);

        this._schema = schema;
        this.class("string-widget");
        this._value = value !== undefined ? value : schema.default ?? "";

        const label = schema.label || key;

        if (schema.enum) {
            this._input = create(this, "select")
                .style("display", "block")
                .style("marginBottom", "8px")
                .on("change", () => {
                    this._value = this._input.property("value") || "";
                    this._editor.saveState();
                });

            for (const [enumKey, enumLabel] of Object.entries(schema.enum)) {
                const option = create(this._input, "option")
                    .attr("value", enumKey)
                    .text(enumLabel);
                if (this._value === enumKey) {
                    option.attr("selected", "selected");
                }
                this._input.append(option);
            }
        } else {

            this._input = create(this, "input")
                .attr("type", "text")
                .style("display", "block")
                .style("marginBottom", "8px")
                .property("value", this._value)
                .on("input", () => {
                    this._value = this._input.property("value") || "";
                    this._editor.saveState();
                });
        }

        const labelNode = create(this, "label")
            .text(label)
            .style("display", "block")
            .style("marginBottom", "4px");

        this.append(labelNode);
        this.append(this._input);
    }

    getValue(): any {
        return this._value;
    }
}