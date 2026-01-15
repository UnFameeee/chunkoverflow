import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import type { Variant, Transition } from 'framer-motion';

export interface UseScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  initialY?: number;
  duration?: number;
  delay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    initialY = 50,
    duration = 0.6,
    delay = 0,
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const initial: Variant = {
    opacity: 0,
    y: initialY,
  };

  const animate: Variant = {
    opacity: 1,
    y: 0,
  };

  const transition: Transition = {
    duration,
    delay,
    ease: 'easeOut',
  };

  return {
    ref,
    initial,
    animate: hasAnimated ? animate : initial,
    transition,
    isInView: inView,
  };
};
