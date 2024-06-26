import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/Helper/ResponsiveFonts';
import {Text} from '@/Theme/Theme';
import {LOGIN} from '@/Navigator/HomeNavigator';
import Assets from '@/Utils/Assets/Assets';

const Splash = ({navigation}: any) => {


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
            Unlock The
          </Text>
          <Text
            textAlign="center"
            color="white"
            lineHeight={50}
            variant="plus_jakarta_sans_bold_40">
            Digital Universe
          </Text>
          <Text
            textAlign="center"
            color="fontGray"
            mt="14"
            lineHeight={22}
            marginHorizontal="30"
            variant="plus_jakarta_sans_semibold_18">
            Mint your own unique NFTs today and join the revolution in digital
            ownership
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
