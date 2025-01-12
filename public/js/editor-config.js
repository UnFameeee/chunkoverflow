const EditorConfig = {
    defaultConfig: {
        placeholder: 'Start typing...',
        defaultBlock: 'paragraph',
        autofocus: true,
        data: {
            blocks: []
        }
    },

    fullEditorConfig: {
        holder: 'editFullEditor',
        placeholder: 'Start typing...',
        defaultBlock: 'paragraph',
        autofocus: true,
        tools: {
            header: {
                class: window.Header,
                config: {
                    levels: [2, 3, 4],
                    defaultLevel: 2
                }
            },
            paragraph: {
                class: window.Paragraph,
                inlineToolbar: true
            },
            list: {
                class: window.List,
                inlineToolbar: true
            },
            checklist: {
                class: window.Checklist,
                inlineToolbar: true
            },
            delimiter: window.Delimiter,
            embed: {
                class: window.Embed,
                config: {
                    services: {
                        youtube: true,
                        codesandbox: true,
                        codepen: true
                    }
                }
            }
        }
    },

    summaryEditorConfig: {
        holder: 'editSummaryEditor',
        placeholder: 'Start typing...',
        defaultBlock: 'paragraph',
        autofocus: true,
        minHeight: 100,
        tools: {
            paragraph: {
                class: window.Paragraph,
                inlineToolbar: true
            },
            list: {
                class: window.List,
                inlineToolbar: true
            }
        }
    }
}; 