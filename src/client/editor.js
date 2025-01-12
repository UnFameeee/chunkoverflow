import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Delimiter from '@editorjs/delimiter';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Table from '@editorjs/table';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Underline from '@editorjs/underline';
import ImageTool from '@editorjs/image';

// Export EditorJS để sử dụng toàn cục
window.EditorJS = EditorJS;

// Cấu hình mặc định cho editor
const defaultConfig = {
    /**
     * Các công cụ có sẵn
     */
    tools: {
        header: {
            class: Header,
            inlineToolbar: ['marker', 'link'],
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3],
                defaultLevel: 2
            },
            shortcut: 'CMD+SHIFT+H'
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
                placeholder: 'Type your text here...'
            }
        },
        list: {
            class: List,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered'
            },
            shortcut: 'CMD+SHIFT+L'
        },
        delimiter: Delimiter,
        table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
            shortcut: 'CMD+SHIFT+O'
        },
        code: {
            class: Code,
            shortcut: 'CMD+SHIFT+C'
        },
        marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+L'
        },
        underline: Underline,
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: '/api/upload-image',
                    byUrl: '/api/fetch-image'
                }
            }
        }
    },

    /**
     * Cấu hình mặc định
     */
    placeholder: 'Let\'s write something!',
    inlineToolbar: ['bold', 'italic', 'marker', 'inlineCode', 'underline'],
    data: {
        blocks: [{
            type: 'paragraph',
            data: {
                text: ''
            }
        }]
    }
};

// Class quản lý editor
class EditorManager {
    static createEditor(config) {
        // Merge cấu hình mặc định với cấu hình người dùng
        const editorConfig = {
            ...defaultConfig,
            ...config,
            tools: {
                ...defaultConfig.tools,
                ...(config.tools || {})
            }
        };

        return new EditorJS(editorConfig);
    }

    static async destroyEditor(editor) {
        if (editor && typeof editor.destroy === 'function') {
            try {
                await editor.destroy();
            } catch (error) {
                console.error('Error destroying editor:', error);
            }
        }
        return null;
    }
}

window.EditorManager = EditorManager; 