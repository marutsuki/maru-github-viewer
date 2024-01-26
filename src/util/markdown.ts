import { Parser, HtmlRenderer } from "commonmark";

const markdownParser = new Parser({ smart: true });
const markdownRenderer = new HtmlRenderer({
    sourcepos: true,
    softbreak: " ",
    safe: false,
});

export function rawMarkdownToHtml(md: string): string {
    const parsed = markdownParser.parse(md);
    return markdownRenderer.render(parsed);
}
