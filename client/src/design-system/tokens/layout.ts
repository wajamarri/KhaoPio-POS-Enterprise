export const layout = {
  sidebar: {
    expandedWidth: "280px",
    collapsedWidth: "88px",
  },

  topbar: {
    height: "72px",
  },

  container: {
    maxWidth: "1600px",
    padding: "2rem",
  },

  page: {
    gap: "2rem",
  },

  card: {
    padding: "1.5rem",
    gap: "1rem",
  },
} as const;

export type LayoutToken = typeof layout;