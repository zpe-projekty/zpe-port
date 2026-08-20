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
    private _dialog: DOMNode<"dialog">;
    private _dialogId: string;
    private _content: DOMNode<"div">;

    constructor(owner: Disposable | null, editor: Editor, options?: HelpButtonOptions) {
        super(owner, "button");
        this._editor = editor;

        this._dialogId = `help-dialog-${dialogCount++}`;

        this.class("help-button");
        this.attr("type", "button");
        // this.attr("command", "show-modal");
        this.attr("commandfor", this._dialogId);


        this._dialog = create(this, "dialog")
            .attr("id", this._dialogId)
            .mount(editor.container)
            .append(
                create(this, "div")
                    .class("help-dialog-content")
                    .append(
                        this._content = create(this, "div")
                            .class("formatted-text")
                            .html(options?.content || ""),
                    ),
                create(this, "div")
                    .class("help-dialog-actions")
                    .append(
                        create(this, "button")
                            .text("Zamknij")
                            .class("help-dialog-close-button")
                            .on("click", () => {
                                this._dialog.element.close();
                            })
                    )
            );

        this.on("click", () => {
            if (options?.helpFile) {
                fetch(editor.api.dataPath(options.helpFile))
                    .then(response => response.text())
                    .then(text => {
                        this._content.html(MD2HTML(text, this._editor.pathResolver.bind(this._editor)));
                        this._dialog.element.showModal();
                    })
                    .catch(error => {
                        console.error("Error loading help file:", error);
                        this._content.html("<p>Nie można załadować pliku pomocy.</p>");
                        this._dialog.element.showModal();
                    });
            } else {
                this._dialog.element.showModal();
            }
        });
    }
}