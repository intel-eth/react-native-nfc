import {dynamicScale} from '@/Helper/ResponsiveFonts';
import React from 'react';
import {View} from 'react-native';

interface IWhiteSpaceProps {
  size: number;
}

const WhiteSpace = ({size}: IWhiteSpaceProps) => {
  return <View style={{height: dynamicScale(size)}} />;
};

export default WhiteSpace;
