import FontSize from '@/Utils/FontSize/FontSize';
import {createBox, createText, useTheme as useReTheme} from '@shopify/restyle';

const PLUS_JAKARTA_SANS_BOLD = 'PlusJakartaSans-Bold';
const PLUS_JAKARTA_SANS_MEDIUM = 'PlusJakartaSans-Medium';
const PLUS_JAKARTA_SANS_REGULAR = 'PlusJakartaSans-Regular';
const PLUS_JAKARTA_SANS_SEMIBOLD = 'PlusJakartaSans-SemiBold';

export const theme = {
  //#region Colors
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    pear: '#DDF247',
    logoutFont: 'rgba(221, 242, 71, 0.6)',
    dimWhite: 'rgba(255, 255, 255, 0.6)',
    blackBG: '#111111',
    dark_jungle_green: '#1d1d1d',
    onxy: '#161616',
    fontGray: '#888888',
    darkGray: '#a5a5a5',
    gray: '#e5e5e5',
    red: '#FF0000',
  },

  //#region Spacing
  spacing: {
    '5': 4,
    '8': 8,
    '6': 6,
    '10': 10,

    '12': 12,
    '14': 14,
    '18': 18,
    '20': 20,

    '24': 24,
    '25': 25,
    '28': 28,
    '30': 30,

    '34': 34,
    '35': 35,
    '38': 38,
    '40': 40,

    '45': 45,
  },
  //#endregion

  //#region  Border Radius
  borderRadii: {
    '5': 4,
    '8': 8,
    '6': 6,
    '10': 10,

    '12': 12,
    '14': 14,
    '18': 18,
    '20': 20,

    '24': 24,
    '25': 25,
    '28': 28,
    '30': 30,

    '34': 34,
    '35': 35,
    '38': 38,
    '40': 40,

    '45': 45,
  },
  //#endregion

  textVariants: {
    //#region 40
    plus_jakarta_sans_regular_40: {
      ...FontSize.fontSize_40(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_40: {
      ...FontSize.fontSize_40(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_40: {
      ...FontSize.fontSize_40(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_40: {
      ...FontSize.fontSize_40(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 35
    plus_jakarta_sans_regular_35: {
      ...FontSize.fontSize_35(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_35: {
      ...FontSize.fontSize_35(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_35: {
      ...FontSize.fontSize_35(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_35: {
      ...FontSize.fontSize_35(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 24
    plus_jakarta_sans_regular_24: {
      ...FontSize.fontSize_24(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_24: {
      ...FontSize.fontSize_24(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_24: {
      ...FontSize.fontSize_24(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_24: {
      ...FontSize.fontSize_24(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 20
    plus_jakarta_sans_regular_20: {
      ...FontSize.fontSize_20(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_20: {
      ...FontSize.fontSize_20(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_20: {
      ...FontSize.fontSize_20(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_20: {
      ...FontSize.fontSize_20(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 18
    plus_jakarta_sans_regular_18: {
      ...FontSize.fontSize_18(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_18: {
      ...FontSize.fontSize_18(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_18: {
      ...FontSize.fontSize_18(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_18: {
      ...FontSize.fontSize_18(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 16
    plus_jakarta_sans_regular_16: {
      ...FontSize.fontSize_16(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_16: {
      ...FontSize.fontSize_16(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_16: {
      ...FontSize.fontSize_16(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_16: {
      ...FontSize.fontSize_16(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

     //#region 14
     plus_jakarta_sans_regular_14: {
      ...FontSize.fontSize_14(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_14: {
      ...FontSize.fontSize_14(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_14: {
      ...FontSize.fontSize_14(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_14: {
      ...FontSize.fontSize_14(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion

    //#region 12
    plus_jakarta_sans_regular_12: {
      ...FontSize.fontSize_12(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_REGULAR,
    },
    plus_jakarta_sans_medium_12: {
      ...FontSize.fontSize_12(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_MEDIUM,
    },
    plus_jakarta_sans_semibold_12: {
      ...FontSize.fontSize_12(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_SEMIBOLD,
    },
    plus_jakarta_sans_bold_12: {
      ...FontSize.fontSize_12(true),
      color: 'black',
      fontFamily: PLUS_JAKARTA_SANS_BOLD,
    },
    //#endregion
  },

  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
