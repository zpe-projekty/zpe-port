import { create, DOMNode, ValueStore } from "@/duct-tape";
import { Editor, SchemaElementObject } from "~/editor";
import { NumberWidget } from "./number-widget";
import { ArrayWidget } from "./array-widget";
import { StringWidget } from "./string-widget";
import { BooleanWidget } from "./boolean-widget";
import { RefWidget } from "./ref-widget";
import { Widget } from "./widget";

export class ObjectWidget extends Widget {
    private _schema: SchemaElementObject;
    private _data: Record<string, any>;
    private _content: DOMNode<"div">;

    constructor(editor: Editor, key: string, schema: SchemaElementObject, data: Record<string, any>) {
        super(editor);

        this._schema = schema;
        this._data = data;
        this.class("object-component");

        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;

            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }

            create("div", this)
                .class("title")
                .text(titleText)
                .mount(this);
        }

        this.append(
            this._content = create("div", this)
                .class("content")
        )

        this.build();
    }

    override dispose(): void {
        if (this._disposed) return;
        super.dispose();
    }

    build(): void {
        for (const [key, prop] of Object.entries(this._schema.properties)) {
            if (this._data[key] === undefined && prop.type !== "ref") {
                console.warn(`Data for key '${key}' is undefined.`);
                continue;
            }

            if (prop.private === true) {
                continue;
            }

            if (prop.type === "string") {
                this.register(new StringWidget(this._editor, key, prop, this._data).mount(this._content));
            } else if (prop.type === "number") {
                this.register(new NumberWidget(this._editor, key, prop, this._data).mount(this._content));
            } else if (prop.type === "boolean") {
                this.register(new BooleanWidget(this._editor, key, prop, this._data).mount(this._content));
            } else if (prop.type === "object") {
                const dataObj = this._data[key] || null;
                if (dataObj !== null && typeof dataObj === "object") {
                    this.register(new ObjectWidget(this._editor, key, prop, dataObj).mount(this._content));
                }
            } else if (prop.type === "array") {
                this.register(new ArrayWidget(this._editor, key, prop, this._data[key] || []).mount(this._content));
            } else if (prop.type === "ref") {
                this.register(new RefWidget(this._editor, key, prop, this._data).mount(this._content));
            }
        }
    }
}