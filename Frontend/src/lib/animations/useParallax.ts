import { useScroll, useTransform, motionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface UseParallaxOptions {
  offset?: [number, number];
  outputRange?: [number, number];
  clamp?: boolean;
}

export const useParallax = (
  scrollValue: MotionValue<number> = useScroll().scrollY,
  options: UseParallaxOptions = {}
) => {
  const { offset = [0, 300], outputRange = [0, -100], clamp = true } = options;

  const y = useTransform(scrollValue, offset, outputRange, {
    clamp,
  });

  return { y };
};

export const useParallaxScroll = () => {
  const { scrollY, scrollYProgress } = useScroll();
  return { scrollY, scrollYProgress };
};
