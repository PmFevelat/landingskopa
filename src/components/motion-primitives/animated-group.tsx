'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import React from 'react';

export type PresetType =
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUp'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutLeft'
  | 'fadeOutRight'
  | 'fadeOutUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideOutDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fadeIn: {},
  fadeInDown: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeInLeft: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fadeInRight: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fadeInUp: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeOut: {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  },
  fadeOutDown: {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 20, opacity: 0 },
  },
  fadeOutLeft: {
    hidden: { x: 0, opacity: 1 },
    visible: { x: -20, opacity: 0 },
  },
  fadeOutRight: {
    hidden: { x: 0, opacity: 1 },
    visible: { x: 20, opacity: 0 },
  },
  fadeOutUp: {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -20, opacity: 0 },
  },
  slideInDown: {
    hidden: { y: -100 },
    visible: { y: 0 },
  },
  slideInLeft: {
    hidden: { x: -100 },
    visible: { x: 0 },
  },
  slideInRight: {
    hidden: { x: 100 },
    visible: { x: 0 },
  },
  slideInUp: {
    hidden: { y: 100 },
    visible: { y: 0 },
  },
  slideOutDown: {
    hidden: { y: 0 },
    visible: { y: 100 },
  },
  slideOutLeft: {
    hidden: { x: 0 },
    visible: { x: -100 },
  },
  slideOutRight: {
    hidden: { x: 0 },
    visible: { x: 100 },
  },
  slideOutUp: {
    hidden: { y: 0 },
    visible: { y: -100 },
  },
};

const addDefaultVariants = (variants: Variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible },
});

export function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item
    ? addDefaultVariants(variants.item)
    : preset
    ? addDefaultVariants(presetVariants[preset])
    : defaultItemVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
