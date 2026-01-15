import { motion, HTMLMotionProps } from 'framer-motion';
import { useScrollReveal } from '@/lib/animations';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialY?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  initialY = 50,
  className = '',
  ...props
}: ScrollRevealProps) => {
  const { ref, initial, animate, transition } = useScrollReveal({
    initialY,
    duration,
    delay,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
