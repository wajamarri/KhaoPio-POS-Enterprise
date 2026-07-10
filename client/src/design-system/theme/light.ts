import { colors } from "../tokens/colors";

export const lightTheme = {
  colors: {
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    info: colors.info,
  },
} as const;