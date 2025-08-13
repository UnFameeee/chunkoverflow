"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Editor } from '@tiptap/react';
import { ToolbarButton, Divider } from "./tiptap-toolbar-button";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Plus,
} from "lucide-react";

interface TiptapToolbarProps {
  editor: Editor;
  editable?: boolean;
}

const TiptapToolbar: React.FC<TiptapToolbarProps> = ({
  editor,
  editable = true
}) => {
  const { t } = useTranslation();
  const [_, forceUpdate] = useState({});
  
  if (!editable || !editor) {
    return null;
  }

  // Listen for editor updates to re-render the toolbar
  useEffect(() => {
    if (!editor) return;
    
    const updateToolbar = () => {
      forceUpdate({});
    };
    
    editor.on('transaction', updateToolbar);
    editor.on('focus', updateToolbar);
    editor.on('blur', updateToolbar);
    
    return () => {
      editor.off('transaction', updateToolbar);
      editor.off('focus', updateToolbar);
      editor.off('blur', updateToolbar);
    };
  }, [editor]);

  // Show all buttons by default - this is a simpler approach that ensures all functionality is available
  // We can make this more sophisticated later if needed

  return (
    <div className="flex flex-wrap items-center px-2 py-1.5 border-b bg-white border-gray-200">
      <ToolbarButton
        onClick={() => editor.commands.undo()}
        disabled={!editor.can().undo()}
        title={t("common.undo")}
        icon={Undo}
      />

      <ToolbarButton
        onClick={() => editor.commands.redo()}
        disabled={!editor.can().redo()}
        title={t("common.redo")}
        icon={Redo}
      />

      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive('bold')}
        title={t("common.bold")}
        icon={Bold}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive('italic')}
        title={t("common.italic")}
        icon={Italic}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive('underline')}
        title={t("common.underline")}
        icon={UnderlineIcon}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive('code')}
        title={t("common.code")}
        icon={Code}
      />

      <Divider />

      <ToolbarButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        active={editor.isActive('heading', { level: 1 })}
        title={t("common.heading1")}
        icon={Heading1}
      />

      <ToolbarButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        active={editor.isActive('heading', { level: 2 })}
        title={t("common.heading2")}
        icon={Heading2}
      />

      <ToolbarButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        active={editor.isActive('heading', { level: 3 })}
        title={t("common.heading3")}
        icon={Heading3}
      />

      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive('bulletList')}
        title={t("common.bulletList")}
        icon={List}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
        title={t("common.orderedList")}
        icon={ListOrdered}
      />

      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        active={editor.isActive({ textAlign: 'left' })}
        title={t("common.alignLeft")}
        icon={AlignLeft}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        active={editor.isActive({ textAlign: 'center' })}
        title={t("common.alignCenter")}
        icon={AlignCenter}
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        active={editor.isActive({ textAlign: 'right' })}
        title={t("common.alignRight")}
        icon={AlignRight}
      />

      <Divider />

      <div className="ml-auto">
        {/* <ToolbarButton
          onClick={() => {
            // Add more functionality
          }}
          title={t("common.moreOptions")}
          icon={Plus}
        /> */}
      </div>
    </div>
  );
};

export default TiptapToolbar;
