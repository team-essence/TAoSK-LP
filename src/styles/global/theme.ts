import { calculateMinSizeBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import "styled-components";

export const theme = {
  HEADER_HEIGHT: calculateMinSizeBasedOnFigma("70px"),

  Z_INDEX: {
    INDEX_MINUS_1: -1,
    INDEX_0: 0,
    INDEX_1: 1,
    INDEX_2: 2,
    INDEX_3: 3,
    INDEX_4: 4,
    INDEX_5: 5,
    INDEX_6: 6,
    INDEX_7: 7,
    INDEX_8: 8,
    HEADER: 50,
    OVERLAY: 90,
    UPPER_OVERLAY: 91,
    UNDER_POPOVER: 98,
    POPOVER: 99,
    MODAL: 100,
    LOADING: 999,
    EFFECT: 1000,
  },

  FONT_SIZES: {
    SIZE_10: calculateMinSizeBasedOnFigma("10px"),
    SIZE_12: calculateMinSizeBasedOnFigma("12px"),
    SIZE_14: calculateMinSizeBasedOnFigma("14px"),
    SIZE_16: calculateMinSizeBasedOnFigma("16px"),
    SIZE_18: calculateMinSizeBasedOnFigma("18px"),
    SIZE_20: calculateMinSizeBasedOnFigma("20px"),
    SIZE_22: calculateMinSizeBasedOnFigma("22px"),
    SIZE_24: calculateMinSizeBasedOnFigma("24px"),
    SIZE_28: calculateMinSizeBasedOnFigma("28px"),
    SIZE_32: calculateMinSizeBasedOnFigma("32px"),
    SIZE_36: calculateMinSizeBasedOnFigma("36px"),
    SIZE_40: calculateMinSizeBasedOnFigma("40px"),
    SIZE_48: calculateMinSizeBasedOnFigma("48px"),
    SIZE_52: calculateMinSizeBasedOnFigma("52px"),
    SIZE_56: calculateMinSizeBasedOnFigma("56px"),
    SIZE_60: calculateMinSizeBasedOnFigma("60px"),
  },

  FONT_WEIGHTS: {
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
    HEAVY: 800,
    BLACK: 900,
  },

  COLORS: {
    TEXT: {
      BLACK: "#454545",
      WHITE: "#fff",
      GRAY: "#ccc",
    },

    BACKGROUND: {
      WHITE: "#fff",
      MINE_SHAFT: "#2A2A2A",
    },

    BORDER: {
      DOVE_GRAY: "#666",
    },
  },
} as const;

type AppTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
