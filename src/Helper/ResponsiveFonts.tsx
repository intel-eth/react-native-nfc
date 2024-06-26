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
