export enum COLORS {
  PRIMARY = '#f6f6f8',
  SECONDARY = '#E3E3E3',
  ACCENT = '#C60021',
  BLACK = '#000000',
}

export const THEME = {
  LIGHT_MODE: {
    PRIMARY: COLORS.PRIMARY,
    SECONDARY: COLORS.SECONDARY,
  },
  DARK_MODE: {
    PRIMARY: COLORS.SECONDARY,
    SECONDARY: COLORS.PRIMARY,
  },
};
