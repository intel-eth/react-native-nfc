import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import SVG from '@/Utils/Assets/Svg';
import {Header} from '@/Components/Common/Header';
import STRINGS from '@/Utils/Constants/String';
import {Button} from '@/Components/Common/Button';

const Home = ({navigation}: any) => {
  return (
    <>
      <SingleSafeAreaView />
      <View style={styles.root}>
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <View style={{width: SCREEN_WIDTH - 45, alignSelf: 'center'}}>
          <SVG.HOME_BANNER
            width={SCREEN_WIDTH - 45}
            style={{alignSelf: 'center', marginBottom: 5}}
          />
          <Pressable
            onPress={() => console.log(1)}
            style={{
              position: 'absolute',
              height: dynamicScale(42),
              bottom: 30,
              width: '91%',
              alignSelf: 'center',
              borderRadius: 10,
            }}/>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.dark_jungle_green,
            paddingHorizontal: 24,
            justifyContent: 'center',
            borderTopLeftRadius:dynamicScale(30),
            borderTopRightRadius:dynamicScale(30)
          }}>
          <SVG.CLOCK_SNOOZE
            style={{alignSelf: 'center', marginBottom: dynamicScale(10)}}
          />
          <View style={{width: SCREEN_WIDTH / 2, alignSelf: 'center'}}>
            <Text
              textAlign="center"
              color="darkGray"
              variant="plus_jakarta_sans_semibold_16">
              {STRINGS.home.no_Minting}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
});

export default Home;
