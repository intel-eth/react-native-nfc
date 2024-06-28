import {dynamicScale} from '@/Helper/ResponsiveFonts';
import { isAndroid } from '@/Helper/VersionCheck';
import {useIsUserLogin} from '@/Hooks/CustomHook';
import SVG from '@/Utils/Assets/Svg';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface IHeaderProps {
  withUser?: boolean;
  headerStyle?: ViewStyle;
}

export function Header({withUser, headerStyle}: IHeaderProps) {
  const isLogin = useIsUserLogin();
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: dynamicScale(24),
          height: dynamicScale(40),
          marginTop:isAndroid()?10:0
        },
        {...headerStyle},
      ]}>
      <SVG.VAULT_X style={{}} />
      {withUser && (
        <>
          {isLogin ? (
            <SVG.USER_IMAGE height={40} width={40} />
          ) : (
            <SVG.ROUND_USER style={{}} />
          )}
        </>
      )}
    </View>
  );
}
