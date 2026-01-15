import { useState, useRef, useCallback } from 'react';

export interface MagneticOptions {
  strength?: number;
  damping?: number;
}

export const useMagnetic = (options: MagneticOptions = {}) => {
  const { strength = 20, damping = 0.1 } = options;
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    setPosition({ x: deltaX, y: deltaY });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    position,
    handleMouseMove,
    handleMouseLeave,
  };
};
