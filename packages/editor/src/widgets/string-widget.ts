import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementString } from "~/editor";
import { Widget } from "./widget";
import { createHelpButton } from "~/components/help";

export class StringWidget extends Widget {
    private _schema: SchemaElementString;
    private _value: string;
    private _input: DOMNode<"input"> | DOMNode<"select"> | DOMNode<"textarea">;

    constructor(editor: Editor, key: string, schema: SchemaElementString, value: string) {
        super(editor, key);

        this._schema = schema;
        this.class("string-widget");
        this._value = value !== undefined ? value : schema.default ?? "";

        const label = schema.label || key;

        const labelNode = create(this, "label")
            .text(label)
            .mount(this)
            ;

        if (schema.help || schema.helpFile) {
            createHelpButton(this, this._editor, {
                content: schema.help,
                helpFile: schema.helpFile,
            })
                .mount(labelNode);
        }

        if (schema.enum) {
            this._input = create(this, "select")
                .class("input-select")
                .mount(this)
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
            if (schema.multiline) {
                this._input = create(this, "textarea")
                    .class("input-textarea")
                    .attr("rows", typeof schema.multiline === "number" ? schema.multiline : 2)
                    .property("value", this._value)
                    .mount(this)
                    .on("input", () => {
                        this._value = this._input.property("value") || "";
                        this._editor.saveState();
                    });
            } else {
                this._input = create(this, "input")
                    .attr("type", "text")
                    .class("input-text")
                    .property("value", this._value)
                    .mount(this)
                    .on("input", () => {
                        this._value = this._input.property("value") || "";
                        this._editor.saveState();
                    });
            }
        }

        // this.append(labelNode);
        // this.append(this._input);
    }

    getValue(): any {
        return this._value;
    }
}