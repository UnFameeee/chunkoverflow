// Create global namespace if it doesn't exist
window.EditorManager = window.EditorManager || {
    editors: {},
    
    initEditor: function(elementId) {
        return ClassicEditor
            .create(document.querySelector(elementId), {
                toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'code'],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
                    ]
                }
            })
            .then(editor => {
                this.editors[elementId] = editor;
                return editor;
            })
            .catch(error => {
                console.error(error);
            });
    },
    
    initSummaryEditor: function(elementId) {
        return ClassicEditor
            .create(document.querySelector(elementId), {
                toolbar: {
                    items: ['bold', 'italic', '|', 'bulletedList'],
                    shouldNotGroupWhenFull: true
                },
                removePlugins: ['Heading', 'BlockQuote', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed', 'Table'],
                link: {
                    defaultProtocol: 'https://',
                    decorators: {
                        openInNewTab: {
                            mode: 'manual',
                            label: 'Open in new tab',
                            defaultValue: true
                        }
                    }
                }
            })
            .then(editor => {
                this.editors[elementId] = editor;
                return editor;
            })
            .catch(error => {
                console.error(error);
            });
    },
    
    destroyEditor: function(elementId) {
        if (this.editors[elementId]) {
            this.editors[elementId].destroy()
                .then(() => {
                    delete this.editors[elementId];
                });
        }
    }
}; 