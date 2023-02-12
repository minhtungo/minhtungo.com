import { Variants } from 'framer-motion';

export const FadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
};

export const PopUp: Variants = {
  hidden: { scale: 0, opacity: 0 },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
};

export const HamFastFadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const HeadingFromLeft: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 70,
    },
  },
};

// top Navbar

export const FromLeftVariant: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const OpacityVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2 } },
};

export const PopUpFromBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
    },
  },
};
