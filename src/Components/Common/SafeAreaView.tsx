import {theme} from '@/Theme/Theme';
import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';

interface ISafeAreaViewProps {
  children: any;
}
interface ISingleSafeAreaViewProps {
  safeAreaStyle?: ViewStyle;
}

export function SingleSafeAreaView({safeAreaStyle}: ISingleSafeAreaViewProps) {
  return (
    <>
      <SafeAreaView className="bg-blackBG" style={[{...safeAreaStyle}]} />
    </>
  );
}

export function RootSafeAreaView({children}: ISafeAreaViewProps) {
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      {children}
    </SafeAreaView>
  );
}
