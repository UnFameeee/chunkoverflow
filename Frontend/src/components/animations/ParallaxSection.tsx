import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ReactNode, RefObject } from 'react';

export interface ParallaxSectionProps {
  children: ReactNode;
  offset?: [number, number];
  outputRange?: [number, number];
  className?: string;
  id?: string;
}

export const ParallaxSection = ({
  children,
  offset = [0, 300],
  outputRange = [0, -100],
  className = '',
  id = '',
}: ParallaxSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, offset, outputRange);

  return (
    <motion.section
      id={id}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export interface ParallaxBackgroundProps {
  className?: string;
  offset?: [number, number];
  outputRange?: [number, number];
}

export const ParallaxBackground = ({
  className = '',
  offset = [0, 500],
  outputRange = [0, 200],
}: ParallaxBackgroundProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, offset, outputRange);

  return (
    <motion.div
      style={{ y }}
      className={className}
    />
  );
};
