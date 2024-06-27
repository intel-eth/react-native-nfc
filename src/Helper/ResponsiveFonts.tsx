import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const STANDARD_WIDTH = 375;
const STANDARD_HEIGHT = 812;

const CURRENT_WIDTH = width;
const CURRENT_HEIGHT = height;

const K = CURRENT_WIDTH / STANDARD_WIDTH;

const KH = CURRENT_HEIGHT / STANDARD_HEIGHT;

const USE_FOR_BIGGER_SIZE = true;

export const dynamicScale = (size: number) => {
  return K * size;
};

export const getFontSize = (size: number) => {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    return dynamicScale(size);
  }
  return size;
};

export const getWidth = (percentage: any) => {
  return width * percentage;
};

export const dynamicVerticalSize = (size: number) => {
  return KH * size;
};

export const space_between = 'space-between';
export const flex_start = 'flex-start';
export const SCREEN_WIDTH = CURRENT_WIDTH;
export const SCREEN_HEIGHT = CURRENT_HEIGHT;
export const BY_TWO_HALF = 0.2 * height;
export const BY_THREE_HALF = 0.33 * height;
export const BY_FOUR_HALF = 0.4 * height;
export const BY_FIVE_HALF = 0.5 * height;
export const BY_SIX_HALF = 0.6 * height;
export const BY_SEVEN_HALF = 0.7 * height;
export const BY_EIGHT_HALF = 0.8 * height;
export const BY_NINE_HALF = 0.9 * height;