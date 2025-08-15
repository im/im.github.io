window.onload = () => {
    mermaid.initialize({ startOnLoad: true });
}
window.$docsify = {
    markdown: {
        renderer: {
            code: function (code, lang) {
                if (lang === "mermaid") {
                    return `<pre class="mermaid">${code}</pre>`;
                }
                return this.origin.code.apply(this, arguments);
            }
        }
    },
    formatUpdated: '{MM}/{DD} {HH}:{mm}',
    name: 'Tom',
    repo: '',
    search: 'auto',
    autoHeader: true,
    auto2top: true,
    // loadNavbar: true,
    // loadNavbar: '_nav.md',
    loadSidebar: true,
    loadSidebar: '_sidebar.md',
    coverpage: {
        '/': '_coverpage.md',
    },
    loadSidebar: true,
    subMaxLevel: 2
}