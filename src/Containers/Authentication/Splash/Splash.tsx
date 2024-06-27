import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/Helper/ResponsiveFonts';
import {Text} from '@/Theme/Theme';
import {LOGIN, MAIN_TAB} from '@/Navigator/HomeNavigator';
import Assets from '@/Utils/Assets/Assets';
import STRINGS from '@/Utils/Constants/String';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(MAIN_TAB);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <ImageBackground
          source={Assets.SPLASH}
          style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
          }}
          resizeMode="cover">
          <View style={{flex: 0.85}} />
          <Text
            textAlign="center"
            color="white"
            lineHeight={50}
            variant="plus_jakarta_sans_bold_40">
            {STRINGS.splashScreen.unlock_The}
          </Text>
          <Text
            textAlign="center"
            color="white"
            lineHeight={50}
            variant="plus_jakarta_sans_bold_40">
            {STRINGS.splashScreen.digital_Universe}
          </Text>
          <Text
            textAlign="center"
            color="fontGray"
            mt="14"
            lineHeight={22}
            marginHorizontal="30"
            variant="plus_jakarta_sans_semibold_18">
            {STRINGS.splashScreen.splash_Desc}
          </Text>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
  },
});

export default Splash;
