import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementArray, SchemaElementObject } from "~/editor";
import { ObjectWidget } from "./object-widget";
import { Widget } from "./widget";

export class ArrayWidget extends Widget {
    private _schema: SchemaElementArray;
    private _data: any[];
    private _itemsContainer: DOMNode<"div">;

    constructor(editor: Editor, key: string, schema: SchemaElementArray, data: any[]) {
        super(editor);

        this._editor = editor;
        this._schema = schema;
        this._data = data;
        this.class("array-component");

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
            this._itemsContainer = create("div", this)
                .class("items-container")
        );

        this.build();
    }

    build(): void {
        if (this._schema.item === undefined) {
            return;
        }

        this._data.forEach((data, index) => {
            const item = create("div", this).class("array-item");
            this._itemsContainer.append(item);

            if (this._schema.item.type === "object") {
                item.append(new ObjectWidget(this._editor, `Element #${index + 1}`, this._schema.item as SchemaElementObject, data));
            } else {
                console.warn(`Unsupported array item type: ${this._schema.item.type}`);
            }
        });
    }
}