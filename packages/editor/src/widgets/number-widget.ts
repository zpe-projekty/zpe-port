import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementNumber } from "~/editor";
import { Widget } from "./widget";
import { createHelpButton } from "~/components/help";

enum NumberFormat {
    Integer = "integer",
    Float = "float",
    Number = "number"
}

export class NumberWidget extends Widget {
    private _schema: SchemaElementNumber;
    private _format: NumberFormat = NumberFormat.Number;
    private _min: number = -Infinity;
    private _max: number = Infinity;
    private _input: DOMNode<"input">;
    private _messageNode: DOMNode<"div">;
    private _value: number;

    constructor(editor: Editor, key: string, schema: SchemaElementNumber, value: number) {
        super(editor, key);

        this._value = value !== undefined ? value : schema.default ?? 0;
        this._editor = editor;
        this._schema = schema;
        this.class("number-component");

        if (schema.format === "integer") {
            this._format = NumberFormat.Integer;
        } else if (schema.format === "float") {
            this._format = NumberFormat.Float;
        } else {
            this._format = NumberFormat.Number;
        }

        this._min = schema.min !== undefined ? schema.min : -Infinity;
        this._max = schema.max !== undefined ? schema.max : Infinity;

        if (schema.help || schema.helpFile || schema.label) {
            const label = create(this, "label")
                .text(schema.label || "")
                .mount(this);

            if (schema.help || schema.helpFile) {
                createHelpButton(this, this._editor, {
                    content: schema.help,
                    helpFile: schema.helpFile,
                })
                    .mount(label);
            }
        }


        this._input = create(this, "input")
            .attr("type", "number")
            .style("display", "block")
            .style("marginBottom", "8px")
            .property("value", this._value ?? 0)
            .mount(this)
            .on("input", () => {
                const value = this._input.property("value");

                if (value === undefined || value === "") {
                    this._messageNode.text("Wartość nie może być pusta.");
                    return;
                }

                let numValue: number;
                if (this._format === NumberFormat.Integer) {
                    numValue = parseInt(value || "0", 10);
                } else {
                    numValue = parseFloat(value || "0");
                }

                if (isNaN(numValue)) {
                    this._messageNode.text("Wartość musi być liczbą.");
                    return;
                } else if (this._format === NumberFormat.Integer && !Number.isInteger(numValue)) {
                    this._messageNode.text("Wartość musi być liczbą całkowitą.");
                    return;
                } else if (numValue < this._min) {
                    this._messageNode.text(`Wartość musi być większa lub równa ${this._min}.`);
                    return;
                } else if (numValue > this._max) {
                    this._messageNode.text(`Wartość musi być mniejsza lub równa ${this._max}.`);
                    return;
                } else {
                    this._messageNode.text("");
                }

                this._value = numValue;
                this._editor.saveState();
            });

        this._messageNode = create(this, "div")
            .class("message")
            .style("color", "red")
            .style("fontSize", "12px")
            .style("marginBottom", "8px")
            .mount(this);


    }

    build(): void {
    }

    getValue(): number | null {
        const value = this._input.property("value");
        if (value === undefined || value === "") {
            return null;
        }

        let numValue: number;
        if (this._format === NumberFormat.Integer) {
            numValue = parseInt(value, 10);
        } else {
            numValue = parseFloat(value);
        }

        if (isNaN(numValue)) {
            return null;
        }

        return numValue;
    }
}