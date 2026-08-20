import { create, DOMNode, ValueStore } from "@/duct-tape";
import { Editor, SchemaElement, SchemaElementBoolean, SchemaElementNumber, SchemaElementObject, SchemaElementString, UseDefaultData } from "~/editor";
import { NumberWidget } from "./number-widget";
import { ArrayWidget } from "./array-widget";
import { StringWidget } from "./string-widget";
import { BooleanWidget } from "./boolean-widget";
import { RefWidget } from "./ref-widget";
import { Widget } from "./widget";
import { IdWidget } from "./id-widget";
import { addId, createUniqueId } from "~/utils/id";
import { MD2HTML } from "~/utils/md-to-html";

export class ObjectWidget extends Widget {
    private _schema: SchemaElementObject;
    private _data: Record<string, any> | typeof UseDefaultData;
    private _content: DOMNode<"div">;
    private _widgets: Widget[] = [];

    constructor(editor: Editor, key: string, schema: SchemaElementObject, data: Record<string, any> | typeof UseDefaultData) {
        super(editor, key);

        this._schema = schema;
        this._data = data;
        this.class("object-widget");

        if (this._schema.title || this._schema.label) {
            const titleText = this._schema.title ?? this._schema.label ?? key;

            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }

            create(this, "div")
                .class("title")
                .text(titleText)
                .mount(this);
        }

        this.append(
            this._content = create(this, "div")
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
            // if (this._data !== UseDefaultData && this._data[key] === undefined && prop.type !== "ref") {
            //     console.warn(`Data for key '${key}' is undefined.`);
            //     continue;
            // }

            if (key.at(0) === "#") {
                // Skip keys that start with '#' (internal or special keys)
                continue;
            }

            if (prop.type === "string") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using empty string as fallback.`);
                }

                const value = this._data !== UseDefaultData ? this._data[key] : (this._schema.properties[key] as SchemaElementString).default || "";
                const childWidget = new StringWidget(this._editor, key, prop, value).mount(this._content);

                this._widgets.push(childWidget);
            } else if (prop.type === "number") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using 0 as fallback.`);
                }

                const value = this._data !== UseDefaultData ? this._data[key] : (this._schema.properties[key] as SchemaElementNumber).default || 0;
                const childWidget = new NumberWidget(this._editor, key, prop, value).mount(this._content);

                this._widgets.push(childWidget);
            } else if (prop.type === "boolean") {
                if (this._data === UseDefaultData && prop.default === undefined) {
                    console.warn(`No default value provided for key '${key}' in schema! Using false as fallback.`);
                }

                const value = this._data !== UseDefaultData ? this._data[key] : (this._schema.properties[key] as SchemaElementBoolean).default || false;
                const childWidget = new BooleanWidget(this._editor, key, prop, value).mount(this._content);

                this._widgets.push(childWidget);
            } else if (prop.type === "object") {
                const dataObj = this._data[key] || null;
                if (dataObj !== null && typeof dataObj === "object") {
                    const childWidget = new ObjectWidget(this._editor, key, prop, dataObj).mount(this._content);
                    this._widgets.push(childWidget);
                }
            } else if (prop.type === "array") {
                const childWidget = new ArrayWidget(this._editor, key, prop, this._data[key] || []).mount(this._content);
                this._widgets.push(childWidget);
            } else if (prop.type === "ref") {
                const childWidget = new RefWidget(this._editor, key, prop, this._data).mount(this._content);
                this._widgets.push(childWidget);
            } else if (prop.type === "id") {
                let value: string;

                if (this._data === UseDefaultData || this._data[key] === undefined) {
                    value = createUniqueId();
                } else {
                    value = this._data[key];
                    addId(value); // Register the existing ID to avoid duplicates
                }

                const childWidget = new IdWidget(this._editor, key, prop, value).mount(this._content);
                this._widgets.push(childWidget);
            } else if (prop.type === "message") {
                const messageText = prop.message || "No message provided.";
                create(this, "div")
                    .class("message")
                    .class("formatted-text")
                    .class(prop.format ?? "text")
                    .mount(this._content)
                    .html(MD2HTML(messageText));
            } else {
                console.warn(`Unsupported schema type '${(prop as SchemaElement).type}' for key '${key}'.`);
            }
        }
    }

    getValue(): Record<string, any> {
        const result: Record<string, any> = {};
        for (const child of this._widgets) {
            try {
                if (child instanceof RefWidget) {
                    // Skip RefWidget as it does not have a direct value to return
                    continue;
                }

                result[child.getKey()] = child.getValue();
            } catch (error) {
                console.error(`Failed to get value for key '${child.getKey()}':`, error);
            }
        }
        return result;
    }
}