export const fadeUpPreset = {
  variants: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};