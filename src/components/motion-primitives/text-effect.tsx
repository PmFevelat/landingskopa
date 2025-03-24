'use client';
import { cn } from '../../../lib/utils';
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  VariantLabels,
  Transition,
  Variants,
} from 'framer-motion';
import { ReactNode } from 'react';

export type PresetType =
  | 'fade'
  | 'fade-in-blur'
  | 'scale'
  | 'slide';

export type PerType = 'char' | 'word' | 'line';

export type TextEffectProps = {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  preset?: PresetType;
  per?: PerType;
  delay?: number;
  speedSegment?: number;
  speedReveal?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  segmentWrapperClassName?: string;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  style?: React.CSSProperties;
};

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
};

const splitText = (text: string, per: PerType) => {
  if (per === 'line') return text.split('\n');
  return text.split(' ').reduce((acc: string[], word, i) => {
    if (i === 0) return [word];
    return [...acc, ' ', word];
  }, []);
};

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  preset = 'fade',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
  className,
}: TextEffectProps) {
  const segments = splitText(children as string, per);
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const baseVariants = presetVariants[preset];
  const stagger = defaultStaggerTimes[per] / speedReveal;

  const computedVariants = {
    container: {
      ...baseVariants.container,
      visible: {
        ...baseVariants.container.visible,
        transition: {
          delayChildren: delay,
          staggerChildren: stagger,
          ...containerTransition,
        },
      },
    },
    item: {
      ...baseVariants.item,
      visible: {
        ...baseVariants.item.visible,
        transition: {
          duration: 0.3 / speedSegment,
          ...segmentTransition,
        },
      },
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={computedVariants.container}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {per !== 'line' ? <span className="sr-only">{children}</span> : null}
          {segments.map((segment, index) => (
            segment === ' ' ? (
              <span key={`space-${index}`}> </span>
            ) : (
              <motion.span
                key={`${per}-${index}-${segment}`}
                variants={computedVariants.item}
                className={cn('inline-block', segmentWrapperClassName)}
              >
                {segment}
              </motion.span>
            )
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}
