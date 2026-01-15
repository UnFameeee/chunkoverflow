import type { Variants } from 'framer-motion';

export interface StaggerOptions {
  staggerChildren?: number;
  delayChildren?: number;
}

export const useStaggerContainer = (options: StaggerOptions = {}) => {
  const { staggerChildren = 0.1, delayChildren = 0 } = options;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return containerVariants;
};

export const useStaggerItem = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return itemVariants;
};
