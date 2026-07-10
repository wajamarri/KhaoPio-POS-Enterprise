export const spacing = {
  0: "0rem",

  1: "0.125rem", // 2px
  2: "0.25rem",  // 4px
  3: "0.5rem",   // 8px
  4: "0.75rem",  // 12px
  5: "1rem",     // 16px

  6: "1.25rem",  // 20px
  7: "1.5rem",   // 24px
  8: "2rem",     // 32px
  9: "2.5rem",   // 40px
  10: "3rem",    // 48px

  11: "3.5rem",  // 56px
  12: "4rem",    // 64px
  13: "4.5rem",  // 72px
  14: "5rem",    // 80px

  15: "6rem",    // 96px
  16: "8rem",    // 128px
} as const;

export type SpacingToken = keyof typeof spacing;