import React, {FC, MutableRefObject, ReactNode} from 'react';
// import _RBSheet from 'react-native-raw-bottom-sheet';
import {BY_FIVE_HALF} from '@/Helper/ResponsiveFonts';
import {StyleSheet} from 'react-native';
import {theme} from '@/Theme/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';

interface bottomSheetProps {
  children: any;
  refe: any;
  height?: any;
}

export function BottomModal({children, refe, height}: bottomSheetProps) {
  return (
    // <RBSheet
    //   ref={refe}
    //   // closeOnDragDown={true}
    //   closeOnPressMask={true}
    //   height={height}
    //   customStyles={{
    //     // draggableIcon: {
    //     //   width: 60,
    //     //   height: 3,
    //     //   backgroundColor:"red"
    //     // },
    //     container: styles.container,
    //   }}>
    <RBSheet
      height={height}
      ref={refe}
      draggable
      closeOnPressMask
      customStyles={{
        wrapper: {},
        container: styles.container,
        draggableIcon: {
          width: 66,
          height: 3,
          marginTop:15,
          borderRadius:10
        },
      }}
      // customAvoidingViewProps={{
      //   enabled: false,
      // }}
    >
      {children}
    </RBSheet>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
