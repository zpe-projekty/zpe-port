import { create, DOMNode, ValueStore } from "@/duct-tape";
import { Editor, SchemaElementString } from "~/editor";
import { Widget } from "./widget";
import { createHelpButton } from "~/components/help";

export class StringWidget extends Widget {
    private _schema: SchemaElementString;
    private _value: string;
    private _input: DOMNode<"input"> | DOMNode<"select"> | DOMNode<"textarea">;
    private _patternInfo: DOMNode<"div"> | null = null;
    private _patternInfoDisplay: ValueStore<boolean>;

    constructor(editor: Editor, key: string, schema: SchemaElementString, value: string) {
        super(editor, key);

        this._schema = schema;
        this.class("string-widget");
        this._value = value !== undefined ? value : schema.default ?? "";
        this._patternInfoDisplay = new ValueStore<boolean>(false);

        if (schema.help || schema.helpFile || schema.label) {
            const labelNode = create(this, "label")
                .text(schema.label || "")
                .mount(this)
                ;

            if (schema.help || schema.helpFile) {
                createHelpButton(this, this._editor, {
                    content: schema.help,
                    helpFile: schema.helpFile,
                })
                    .mount(labelNode);
            }
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
                    .attr("placeholder", schema.placeholder || "")
                    .property("value", this._value)
                    .mount(this)
                    .on("input", () => {
                        this._value = this._input.property("value") || "";
                        this._editor.saveState();
                        if (schema.pattern) {
                            const regex = new RegExp(schema.pattern);
                            this._patternInfoDisplay.set(!regex.test(this._value));
                        }
                    });

                if (schema.patternMessage) {
                    this._patternInfo = create(this, "div")
                        .class("pattern-info")
                        .display(this._patternInfoDisplay)
                        .text(schema.patternMessage)
                        .mount(this);
                }
            }
        }

        // this.append(labelNode);
        // this.append(this._input);
    }

    getValue(): any {
        return this._value;
    }
}