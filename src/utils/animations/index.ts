export const imageAnimation = {
  hidden: {
    transform: 'scale(1.2)',
    opacity: 0,
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
  },
};

export const textAnimation = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export const itemAnimation = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
