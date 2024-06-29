import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SCREEN_WIDTH} from '@/Helper/ResponsiveFonts';
import {Text} from '@/Theme/Theme';
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
      <View className="bg-blackBG flex-1 ">
        <View
          className="flex-col justify-evenly h-full"
          style={{
            paddingBottom: isAndroid() ? 20 : 0,
          }}>
          <View>
            <SVG.VAULT_LOGO className="self-center" />
          </View>
          <View>
            <SVG.FACE_ICON className="self-center" />
          </View>
          <View>
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
        <SVG.LINE width={SCREEN_WIDTH} className="absolute bottom-0" />
      </View>
    </>
  );
};

export default Splash;
