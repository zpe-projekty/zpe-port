import { create, DOMNode, Disposable } from "@/duct-tape";
import { Editor } from "~/editor";
import { MD2HTML } from "~/utils/md-to-html";

export interface HelpButtonOptions {
    content?: string;
    helpFile?: string;
    className?: string;
}

export function createHelpButton(owner: Disposable | null, editor: Editor, options?: HelpButtonOptions): HelpButton {
    return new HelpButton(owner, editor, options);
}

let dialogCount = 0;

export class HelpButton extends DOMNode<"button"> {
    private _editor: Editor;
    private _dialog: DOMNode<"dialog"> | null = null;
    private _dialogId: string;
    private _content: DOMNode<"div"> | null = null;

    constructor(owner: Disposable | null, editor: Editor, options?: HelpButtonOptions) {
        super(owner, "button");
        this._editor = editor;

        this._dialogId = `help-dialog-${dialogCount++}`;

        this.class("help-button");
        this.attr("type", "button");
        this.attr("commandfor", this._dialogId);

        this.on("click", () => {
            if (!this._dialog) {
                this.createDialog();
            }

            if (options?.helpFile) {

                fetch(this._editor.api.dataPath(options.helpFile))
                    .then(response => response.text())
                    .then(text => {
                        this._content!.html(MD2HTML(text, this._editor.pathResolver.bind(this._editor)));
                        this._dialog!.element.showModal();
                    })
                    .catch(error => {
                        console.error("Error loading help file:", error);
                        this._content!.html("<p>Nie można załadować pliku pomocy.</p>");
                        this._dialog!.element.showModal();
                    });
            } else {
                this._content!.html(MD2HTML(options?.content || "", this._editor.pathResolver.bind(this._editor)));
                this._dialog!.element.showModal();
            }
        });
    }

    createDialog(): DOMNode<"dialog"> {
        this._dialog = create(this, "dialog")
            .attr("id", this._dialogId)
            .mount(this._editor.container)
            .append(
                create(this, "div")
                    .class("help-dialog-content")
                    .append(
                        this._content = create(this, "div")
                            .class("formatted-text")
                    ),
                create(this, "div")
                    .class("help-dialog-actions")
                    .append(
                        create(this, "button")
                            .text("Zamknij")
                            .class("help-dialog-close-button")
                            .on("click", () => {
                                this._dialog?.element.close();
                            })
                    )
            );
        return this._dialog!;
    }
}