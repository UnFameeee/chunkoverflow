"use client";

import React, { useCallback } from 'react';
import "@/styles/tiptap.css";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { cn } from "@/lib/utils";
import TiptapToolbar from "./tiptap-toolbar";

interface EnhancedTiptapEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
  editable?: boolean;
}

const EnhancedTiptapEditor: React.FC<EnhancedTiptapEditorProps> = ({
  content = '',
  onChange,
  placeholder = 'Write something...',
  className = '',
  editable = true
}) => {
  // Handle changes from the editor
  const handleUpdate = useCallback(({ editor }) => {
    const html = editor.getHTML();
    onChange?.(html);
  }, [onChange]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        },
        bulletList: {
          HTMLAttributes: { class: 'list-disc list-outside ml-4 space-y-1' },
        },
        orderedList: {
          HTMLAttributes: { class: 'list-decimal list-outside ml-4 space-y-1' },
        },
        paragraph: {
          HTMLAttributes: { class: 'mb-2' },
        },
        code: {
          HTMLAttributes: { class: 'bg-gray-100 px-1 py-0.5 rounded text-sm font-mono' },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
        defaultAlignment: 'left',
      }),

      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    content: content,
    editable: editable,
    onUpdate: handleUpdate,
    editorProps: {
      attributes: {
        class: "focus:outline-none w-full min-h-[300px] p-4 text-base bg-white",
        spellcheck: 'false',
      },
    },
  }, [editable, placeholder]);
  
  // Handle external content changes without recreating the editor
  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-md overflow-hidden border shadow-sm tiptap-editor-wrapper",
        "bg-white border-gray-200",
        className
      )}
    >
      <TiptapToolbar editor={editor} editable={editable} />

      {/* Editor Content */}
      <div className="tiptap-content-container max-h-[400px] overflow-y-auto">
        <EditorContent
          editor={editor}
          className="focus:outline-none break-all"
        />
      </div>
    </div>
  );
};

export default EnhancedTiptapEditor;
