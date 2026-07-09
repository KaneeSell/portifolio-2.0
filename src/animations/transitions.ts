import { ValueAnimationTransition } from "motion";

export const defaultTransition: ValueAnimationTransition = {
  duration: 0.4,
  ease: "easeOut",
};

export const slowTransition: ValueAnimationTransition = {
  duration: 0.8,
  ease: "easeInOut",
};

export const springTransition = {
  type: "spring",
  stiffness: 250,
  damping: 20,
};