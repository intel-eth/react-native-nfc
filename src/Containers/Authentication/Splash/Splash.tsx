import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {MAIN_TAB} from '@/Navigator/HomeNavigator';
import STRINGS from '@/Utils/Constants/String';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SVG from '@/Utils/Assets/Svg';
import {isAndroid} from '@/Helper/VersionCheck';

const Splash = ({navigation}: any) => {
  const nav = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      nav.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: MAIN_TAB}],
        }),
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <View
          style={{
            justifyContent: 'space-evenly',
            height: SCREEN_HEIGHT,
            flexDirection: 'column',
            paddingBottom: isAndroid() ? 20 : 0,
          }}>
          <View>
            <SVG.VAULT_LOGO style={styles.logoView} />
          </View>
          <View>
            <SVG.FACE_ICON style={styles.faceView} />
          </View>
          <View style={{}}>
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
          </View>
        </View>
        <SVG.LINE width={SCREEN_WIDTH} style={styles.lineView} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    backgroundColor: theme.colors.blackBG,
  },
  logoView: {
    alignSelf: 'center',
  },
  faceView: {
    // position: 'absolute',
    // top: dynamicScale(40),
    alignSelf: 'center',
  },
  lineView: {position: 'absolute', bottom: 0},
});

export default Splash;
