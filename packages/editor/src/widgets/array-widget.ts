import { create, DOMNode } from "@/duct-tape";
import { Editor, SchemaElementArray, SchemaElementId, SchemaElementNumber, SchemaElementObject, SchemaElementString, UseDefaultData } from "~/editor";
import { ObjectWidget } from "./object-widget";
import { Widget } from "./widget";
import { createHelpButton } from "~/components/help";
import { IdWidget } from "./id-widget";
import { StringWidget } from "./string-widget";
import { NumberWidget } from "./number-widget";

interface ArrayItem {
    key: string;
    widget: Widget;
    container: DOMNode<"div">;
    itemIndexNode?: DOMNode<"div">;
}

export class ArrayWidget extends Widget {
    private _schema: SchemaElementArray;
    // private _data: any[];
    private _itemsContainer: DOMNode<"div">;
    private _items: ArrayItem[] = [];
    private _reorderable: boolean;
    private _editable: boolean;
    private _controls: string | null;
    private _itemCounter: number = 0;
    private _draggedItem: DOMNode<"div"> | null = null;

    constructor(editor: Editor, key: string, schema: SchemaElementArray, data: any[]) {
        super(editor, key);

        this._editor = editor;
        this._schema = schema;
        // this._data = data;
        this._reorderable = schema.reorderable ?? false;
        this._editable = schema.editable ?? false;
        this._controls = schema.controls ?? null;
        this.class("array-widget");

        const titleNode = create(this, "div")
            .class("block-title")
            .mount(this);


        if (this._schema.title || this._schema.label) {
            titleNode.text(this._schema.title ?? this._schema.label ?? key);

            if (this._schema.label) {
                console.warn(`Schema element has 'label' property, which is deprecated. Use 'title' instead. (Element: ${key})`);
            }
        }

        if (this._schema.help || this._schema.helpFile) {
            createHelpButton(this, this._editor, {
                content: this._schema.help,
                helpFile: this._schema.helpFile,
            })
                .mount(titleNode);
        }

        this.append(
            this._itemsContainer = create(this, "div")
                .class("block-content")
        );

        if (data && Array.isArray(data)) {
            data.forEach((itemData, index) => {
                const itemKey = `${key}[${index}]`;
                if (this._schema.item.type === "object" || this._schema.item.type === "id" || this._schema.item.type === "string") {
                    this.addItem(itemKey, itemData);
                } else {
                    console.warn(`Unsupported array item type: ${this._schema.item.type}`);
                }
            });
        }

        if (this._editable) {
            create(this, "div")
                .class("actions")
                .append(
                    create(this, "button")
                        .text("Dodaj element")
                        .class("add-button")
                        .on("click", () => {
                            const newItemKey = `${key}[${this._itemCounter++}]`;
                            if (this._schema.item.type === "object") {
                                this.addItem(newItemKey, UseDefaultData);
                            } else if (this._schema.item.type === "string") {
                                this.addItem(newItemKey, "");
                            } else {
                                console.warn(`Unsupported array item type: ${this._schema.item.type}`);
                            }
                            this.updateItemOrder();
                            this._editor.saveState();
                        })
                )
                .mount(this);
        }
    }

    getValue(): any {
        const containerChildren = Array.from(this._itemsContainer.element.children);
        const orderedItems = this._items.slice().sort((a, b) => {
            const aIndex = containerChildren.indexOf(a.container.element);
            const bIndex = containerChildren.indexOf(b.container.element);
            return aIndex - bIndex;
        });

        return orderedItems.map(item => item.widget.getValue());
    }

    addItem(key: string, data: any): void {
        const item = create(this, "div").class("item");
        this._itemsContainer.append(item);

        const itemHandle = create(item, "div")
            .class("item-header")
            .class("vertical", this._controls === "vertical")
            .mount(item);

        if (this._reorderable) {
            if (this._controls) {
                create(item, "div")
                    .class("item-move-up")
                    .mount(itemHandle)
                    .append(
                        create(this, "button")
                            .text("⬆")
                            .on("click", () => {
                                this.moveItemUp(key);
                            })
                    );
            }

            create(item, "div")
                .class("item-drag-handle")
                .mount(itemHandle)
                .attr("draggable", "true")
                .on("dragstart", (event) => {
                    const bounding = item.element.getBoundingClientRect();
                    const x = event.clientX - bounding.left;
                    const y = event.clientY - bounding.top;
                    event.dataTransfer!.setDragImage(item.element, x, y);
                    event.dataTransfer!.effectAllowed = "move";
                    this._draggedItem = item;
                    // item.style("opacity", "0");
                })
                .on("dragend", (event) => {
                    this._draggedItem = null;
                    // item.style("opacity", "");
                    item.class("drag-drop", false);
                })

            create(item, "div")
            if (this._controls) {
                create(item, "div")
                    .class("item-move-down")
                    .mount(itemHandle)
                    .append(
                        create(this, "button")
                            .text("⬇")
                            .on("click", () => {
                                this.moveItemDown(key);
                            })
                    );
            }

            item
                .on("dragover", (event) => {
                    if (this._draggedItem && this._draggedItem == item && this._draggedItem.element.parentElement === item.element.parentElement) {
                        // XXX: daje to czas żeby "dragstart" mógł zrobić screen capture, a następnie ukrywamy element.
                        // item.style("opacity", "0");
                        item.class("drag-drop");
                    }

                    if (this._draggedItem && this._draggedItem !== item && this._draggedItem.element.parentElement === item.element.parentElement) {
                        const targetBounding = item.element.getBoundingClientRect();
                        const draggedBounding = this._draggedItem.element.getBoundingClientRect();

                        // console.log("Drag over:", key, "targetBounding:", targetBounding, "draggedBounding:", draggedBounding);

                        if (draggedBounding.top > targetBounding.top) {
                            item.element.parentElement!.insertBefore(this._draggedItem.element, item.element);
                        } else {
                            item.element.parentElement!.insertBefore(this._draggedItem.element, item.element.nextSibling);
                        }
                    }

                    event.preventDefault();
                })
                .on("drop", (event) => {
                    event.preventDefault();
                    this.updateItemOrder();
                    this._editor.saveState();
                });
        }

        const itemIndex = create(item, "div")
            .class("item-index")
            .mount(itemHandle)
            .text(`${this._items.length + 1}`);

        const itemContent = create(item, "div")
            .class("item-content")
            .mount(item);

        if (this._schema.item.type === "object" || this._schema.item.type === "string" || this._schema.item.type === "number") {
            let childWidget: Widget | null = null;
            if (this._schema.item.type === "object") {
                childWidget = new ObjectWidget(this._editor, key, this._schema.item as SchemaElementObject, data);
                this._items.push({
                    key, widget: childWidget, container: item, itemIndexNode: itemIndex
                });
                childWidget.mount(itemContent);
            } else if (this._schema.item.type === "string") {
                childWidget = new StringWidget(this._editor, key, this._schema.item as SchemaElementString, data);
                this._items.push({
                    key, widget: childWidget, container: item, itemIndexNode: itemIndex
                });
                childWidget.mount(itemContent);
            } else if (this._schema.item.type === "number") {
                childWidget = new NumberWidget(this._editor, key, this._schema.item as SchemaElementNumber, data);
                this._items.push({
                    key, widget: childWidget, container: item, itemIndexNode: itemIndex
                });
                childWidget.mount(itemContent);
            }

            if (this._editable && childWidget) {
                create(item, "div")
                    .class("item-actions")
                    .mount(item)
                    .append(
                        create(this, "button")
                            .class("remove-button")
                            .text("Usuń")
                            .on("click", () => {
                                this.removeItem(childWidget);
                            })
                    );
            }
        } else if (this._schema.item.type === "id") {
            const idWidget = new IdWidget(this._editor, key, this._schema.item as SchemaElementId, data);
            this._items.push({
                key, widget: idWidget, container: item, itemIndexNode: itemIndex
            });
            idWidget.mount(itemContent);
        }
    }

    updateItemOrder(): void {
        const containerChildren = Array.from(this._itemsContainer.element.children);
        this._items.sort((a, b) => {
            const aIndex = containerChildren.indexOf(a.container.element);
            const bIndex = containerChildren.indexOf(b.container.element);
            return aIndex - bIndex;
        });

        this._items.forEach((item, index) => {
            if (item.itemIndexNode) {
                item.itemIndexNode.text(`${index + 1}`);
            }
        });
    }

    private moveItemDown(key: string) {
        const index = this._items.findIndex(i => i.widget.getKey() === key);
        if (index < this._items.length - 1) {
            const currentItem = this._items[index];
            const nextItem = this._items[index + 1];
            this._itemsContainer.element.insertBefore(nextItem.container.element, currentItem.container.element);
            this.updateItemOrder();
            this._editor.saveState();
        }
    }

    private moveItemUp(key: string) {
        const index = this._items.findIndex(i => i.widget.getKey() === key);
        if (index > 0) {
            const currentItem = this._items[index];
            const previousItem = this._items[index - 1];
            this._itemsContainer.element.insertBefore(currentItem.container.element, previousItem.container.element);
            this.updateItemOrder();
            this._editor.saveState();
        }
    }

    removeItem(item: Widget): void {
        const itemIndex = this._items.findIndex(i => i.widget === item);
        if (itemIndex !== -1) {
            const itemNode = this._items[itemIndex].container;
            this._items.splice(itemIndex, 1);
            item.dispose();
            itemNode.dispose();
            this.updateItemOrder();
            this._editor.saveState();
        }
    }
}