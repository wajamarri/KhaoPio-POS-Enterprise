import { colors } from "../tokens/colors";

export const darkTheme = {
  colors: {
    background: "#0F172A",
    surface: "#1E293B",
    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
      muted: "#94A3B8",
    },
    border: "#334155",
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    info: colors.info,
  },
} as const;