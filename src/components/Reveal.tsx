import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealKind = 'up' | 'down' | 'right' | 'mask' | 'clip' | 'row';

type RevealTag =
  | 'div' | 'section' | 'article' | 'header' | 'figure'
  | 'li'  | 'p'       | 'span'
  | 'h1'  | 'h2'      | 'h3'       | 'h4';

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView' | 'viewport'> {
  as?: RevealTag;
  kind?: RevealKind;
  delay?: number;
  amount?: number;
  once?: boolean;
  children?: ReactNode;
}

const variants: Record<RevealKind, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -18 },
    visible: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  mask: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)' },
  },
  clip: {
    hidden: { clipPath: 'inset(0 0 100% 0)' },
    visible: { clipPath: 'inset(0 0 0% 0)' },
  },
  row: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
};

export function Reveal({
  as = 'div',
  kind = 'up',
  delay = 0,
  amount = 0.2,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  const duration = kind === 'mask' || kind === 'clip' ? 1.1 : 0.85;

  return (
    <MotionTag
      variants={variants[kind]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.7, 0, 0.15, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
