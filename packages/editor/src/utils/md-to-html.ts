// import { path } from "@/zpe-port";

type PathResolver = (path: string) => string;

export function MD2HTML(markdown: string, pathResolver: PathResolver = (p) => p): string {
    const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
    const blocks: string[] = [];

    let index = 0;
    while (index < lines.length) {
        const line = lines[index];

        if (line.trim() === "") {
            index += 1;
            continue;
        }

        const codeBlockMatch = /^\s{0,3}```\s*([^`]*)$/.exec(line);
        if (codeBlockMatch) {
            const codeLines: string[] = [];
            const language = codeBlockMatch[1].trim().split(/\s+/)[0] ?? "";
            index += 1;

            while (index < lines.length && !/^\s{0,3}```\s*$/.test(lines[index])) {
                codeLines.push(lines[index]);
                index += 1;
            }

            if (index < lines.length) {
                index += 1;
            }

            const languageClass = language === "" ? "" : ` class="language-${escapeAttribute(language)}"`;
            blocks.push(`<pre><code${languageClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
            continue;
        }

        const headingMatch = /^(#{1,3})\s+(.*)$/.exec(line);
        if (headingMatch) {
            const level = headingMatch[1].length;
            blocks.push(`<h${level}>${renderInline(pathResolver, headingMatch[2].trim())}</h${level}>`);
            index += 1;
            continue;
        }

        if (isTableRow(line) && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
            const tableLines: string[] = [line, lines[index + 1]];
            index += 2;

            while (index < lines.length && isTableRow(lines[index])) {
                tableLines.push(lines[index]);
                index += 1;
            }

            blocks.push(renderTable(pathResolver, tableLines));
            continue;
        }

        if (/^>\s?/.test(line)) {
            const quoteLines: string[] = [];

            while (index < lines.length && /^>\s?/.test(lines[index])) {
                quoteLines.push(lines[index].replace(/^>\s?/, ""));
                index += 1;
            }

            blocks.push(`<blockquote>${quoteLines.map((quoteLine) => renderInline(pathResolver, quoteLine)).join("<br>")}</blockquote>`);
            continue;
        }

        if (/^\s*[-*+]\s+/.test(line)) {
            const items = collectListItems(lines, index, "ul");
            blocks.push(renderList(pathResolver, items.items, "ul"));
            index = items.nextIndex;
            continue;
        }

        if (/^\s*\d+\.\s+/.test(line)) {
            const items = collectListItems(lines, index, "ol");
            blocks.push(renderList(pathResolver, items.items, "ol"));
            index = items.nextIndex;
            continue;
        }

        const paragraphLines: string[] = [line.trim()];
        index += 1;

        while (index < lines.length) {
            const nextLine = lines[index];
            if (nextLine.trim() === "" || isBlockBoundary(nextLine, lines, index)) {
                break;
            }

            paragraphLines.push(nextLine.trim());
            index += 1;
        }

        blocks.push(`<p>${renderInline(pathResolver, paragraphLines.join(" "))}</p>`);
    }

    return blocks.join("").trim();
}

type ListType = "ul" | "ol";

function renderInline(pathResolver: PathResolver, text: string): string {
    return parseInline(pathResolver, text, null).html;
}

function parseInline(pathResolver: PathResolver, text: string, stopToken: string | null): { html: string; nextIndex: number; closed: boolean } {
    let html = "";
    let index = 0;

    while (index < text.length) {
        if (stopToken !== null && text.startsWith(stopToken, index)) {
            return { html, nextIndex: index + stopToken.length, closed: true };
        }

        if (text[index] === "`") {
            const closeIndex = text.indexOf("`", index + 1);
            if (closeIndex !== -1) {
                html += `<code>${escapeHtml(text.slice(index + 1, closeIndex))}</code>`;
                index = closeIndex + 1;
                continue;
            }
        }

        if (text.startsWith("![", index)) {
            const image = parseImage(pathResolver, text, index);
            if (image !== null) {
                html += image.html;
                index = image.nextIndex;
                continue;
            }
        }

        if (text.startsWith("[", index)) {
            const link = parseLink(pathResolver, text, index);
            if (link !== null) {
                html += link.html;
                index = link.nextIndex;
                continue;
            }
        }

        if (text.startsWith("**", index)) {
            const nested = parseInline(pathResolver, text.slice(index + 2), "**");
            if (nested.closed) {
                html += `<strong>${nested.html}</strong>`;
                index += 2 + nested.nextIndex;
                continue;
            }
        }

        if (text[index] === "*") {
            const nested = parseInline(pathResolver, text.slice(index + 1), "*");
            if (nested.closed) {
                html += `<em>${nested.html}</em>`;
                index += 1 + nested.nextIndex;
                continue;
            }
        }

        html += escapeHtml(text[index]);
        index += 1;
    }

    return { html, nextIndex: index, closed: false };
}

function parseLink(pathResolver: PathResolver, text: string, startIndex: number): { html: string; nextIndex: number } | null {
    const closeBracket = findMatchingBracket(text, startIndex + 1, "[", "]");
    if (closeBracket === -1 || text[closeBracket + 1] !== "(") {
        return null;
    }

    const closeParen = findClosingParen(text, closeBracket + 2);
    if (closeParen === -1) {
        return null;
    }

    const label = text.slice(startIndex + 1, closeBracket);
    const url = text.slice(closeBracket + 2, closeParen);
    const renderedLabel = parseInline(pathResolver, label, null).html;
    return {
        html: `<a href="${escapeAttribute(url)}" data-link-url="${escapeAttribute(url)}">${renderedLabel}</a>`,
        nextIndex: closeParen + 1,
    };
}

function parseImage(pathResolver: PathResolver, text: string, startIndex: number): { html: string; nextIndex: number } | null {
    const openBracketIndex = startIndex + 1;
    const closeBracket = text.indexOf("]", openBracketIndex + 1);
    if (text[openBracketIndex] !== "[" || closeBracket === -1 || text[closeBracket + 1] !== "(") {
        return null;
    }

    const closeParen = findClosingParen(text, closeBracket + 2);
    if (closeParen === -1) {
        return null;
    }

    const altText = text.slice(openBracketIndex + 1, closeBracket);
    const url = text.slice(closeBracket + 2, closeParen);
    return {
        html: `<img src="${escapeAttribute(pathResolver(url))}" alt="${escapeAttribute(altText)}">`,
        nextIndex: closeParen + 1,
    };
}

function collectListItems(lines: string[], startIndex: number, type: ListType): { items: string[]; nextIndex: number } {
    const items: string[] = [];
    let index = startIndex;

    while (index < lines.length) {
        const line = lines[index];
        const match = type === "ul"
            ? /^(\s*[-*+]\s+)(.*)$/.exec(line)
            : /^(\s*\d+\.\s+)(.*)$/.exec(line);

        if (!match) {
            break;
        }

        const currentIndent = match[1].match(/^\s*/)?.[0].length ?? 0;
        let itemText = match[2].trimEnd();
        index += 1;

        while (index < lines.length) {
            const continuationLine = lines[index];
            if (continuationLine.trim() === "") {
                break;
            }

            const continuationIndent = continuationLine.match(/^\s*/)?.[0].length ?? 0;
            if (continuationIndent <= currentIndent && isBlockBoundary(continuationLine, lines, index)) {
                break;
            }

            if (continuationIndent > currentIndent || (!isListItemLine(continuationLine) && !isBlockBoundary(continuationLine, lines, index))) {
                itemText += ` ${continuationLine.trim()}`;
                index += 1;
                continue;
            }

            break;
        }

        items.push(itemText);
    }

    return { items, nextIndex: index };
}

function renderList(pathResolver: PathResolver, items: string[], type: ListType): string {
    const tagName = type === "ul" ? "ul" : "ol";
    const renderedItems = items.map((item) => `<li>${renderInline(pathResolver, item)}</li>`).join("");
    return `<${tagName}>${renderedItems}</${tagName}>`;
}

function renderTable(pathResolver: PathResolver, lines: string[]): string {
    const rows = lines.map(splitTableRow).filter((row) => row.length > 0);
    const header = rows[0] ?? [];
    const body = rows.slice(2);

    const headHtml = header.map((cell) => `<th>${renderInline(pathResolver, cell)}</th>`).join("");
    const bodyHtml = body
        .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(pathResolver, cell)}</td>`).join("")}</tr>`)
        .join("");

    return `<table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`;
}

function splitTableRow(line: string): string[] {
    return line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim());
}

function isTableRow(line: string): boolean {
    return /^\s*\|.*\|\s*$/.test(line);
}

function isTableSeparator(line: string): boolean {
    const cells = splitTableRow(line);
    return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isListItemLine(line: string): boolean {
    return /^(\s*[-*+]\s+|\s*\d+\.\s+)/.test(line);
}

function isBlockBoundary(line: string, lines: string[], index: number): boolean {
    return (
        /^(#{1,3})\s+/.test(line)
        || /^>\s?/.test(line)
        || isListItemLine(line)
        || (isTableRow(line) && index + 1 < lines.length && isTableSeparator(lines[index + 1]))
    );
}

function findMatchingBracket(text: string, startIndex: number, open: string, close: string): number {
    let depth = 0;

    for (let index = startIndex; index < text.length; index += 1) {
        if (text[index] === open) {
            depth += 1;
            continue;
        }

        if (text[index] === close) {
            if (depth === 0) {
                return index;
            }
            depth -= 1;
        }
    }

    return -1;
}

function findClosingParen(text: string, startIndex: number): number {
    let depth = 0;

    for (let index = startIndex; index < text.length; index += 1) {
        if (text[index] === "(") {
            depth += 1;
            continue;
        }

        if (text[index] === ")") {
            if (depth === 0) {
                return index;
            }
            depth -= 1;
        }
    }

    return -1;
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function escapeAttribute(text: string): string {
    return escapeHtml(text).replace(/"/g, "&quot;");
}