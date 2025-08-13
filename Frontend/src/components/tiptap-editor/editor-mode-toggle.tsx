"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export type EditorMode = 'basic' | 'advanced';

interface EditorModeToggleProps {
  value: EditorMode;
  onChange: (mode: EditorMode) => void;
  className?: string;
}

const EditorModeToggle: React.FC<EditorModeToggleProps> = ({
  value,
  onChange,
  className
}) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className={cn(
        "flex rounded-full p-1 bg-gray-100 w-fit",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onChange('basic')}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
          value === 'basic' 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-gray-700 hover:text-gray-900"
        )}
      >
        {t("common.basic")}
      </button>
      
      <button
        type="button"
        onClick={() => onChange('advanced')}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
          value === 'advanced' 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-gray-700 hover:text-gray-900"
        )}
      >
        {t("common.advanced")}
      </button>
    </div>
  );
};

export default EditorModeToggle;
