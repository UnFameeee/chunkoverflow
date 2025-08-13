"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title?: string;
  icon: LucideIcon;
  className?: string;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  active = false,
  disabled = false,
  title,
  icon: Icon,
  className,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "p-2 rounded-md hover:bg-gray-100 transition-colors duration-200",
      "text-gray-700 hover:text-gray-900",
      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50",
      active && "bg-primary-200 text-primary-800 hover:bg-primary-200",
      disabled && "opacity-40 cursor-not-allowed hover:bg-transparent",
      className
    )}
    type="button"
  >
    <Icon className="w-4 h-4" />
  </button>
);

export const Divider: React.FC = () => (
  <div className="h-6 w-px bg-gray-300 mx-1" />
);