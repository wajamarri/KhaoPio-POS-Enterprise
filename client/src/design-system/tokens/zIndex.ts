export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  drawer: 1300,
  modal: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;

export type ZIndexToken = keyof typeof zIndex;