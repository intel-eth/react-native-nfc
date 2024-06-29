import {Header} from './../../../Components/Common/Header';
import React, {useRef} from 'react';
import {View} from 'react-native';
import {BY_THREE_HALF, dynamicScale} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Button} from '@/Components/Common/Button';
import STRINGS, {loginBottomSheet} from '@/Utils/Constants/String';
import SVG from '@/Utils/Assets/Svg';
import WhiteSpace from '@/Components/Common/WhiteSpcae';
import {BottomModal} from '@/Components/Common/BottomSheet';
import {THIRD_WEB_WALLET} from '@/Navigator/HomeNavigator';
import {useIsUserLogin} from '@/Hooks/CustomHook';
import {useDispatch} from 'react-redux';
import {userLogout} from '@/Store/slices/local';

const Login = ({navigation}: any) => {
  const refRBSheet = useRef<any>();
  const isLogin = useIsUserLogin();
  const dispatch = useDispatch();

  return (
    <>
      <SingleSafeAreaView />
      <View className="flex-1 bg-blackBG">
        <Header />

        <WhiteSpace size={isLogin ? 50 : 100} />
        {isLogin ? (
          <>
            <SVG.USER_IMAGE className="self-center" />
            <WhiteSpace size={20} />
          </>
        ) : (
          <>
            <SVG.LOGIN_USER className="self-center" />
            <WhiteSpace size={50} />
          </>
        )}

        <View className="self-center">
          {isLogin ? (
            <>
              <Text
                textAlign="center"
                color="white"
                variant="plus_jakarta_sans_semibold_24">
                Themesflat
              </Text>
              <Text
                textAlign="center"
                color="fontGray"
                mt="10"
                variant="plus_jakarta_sans_semibold_20">
                themseflat@gmail.com
              </Text>
              <WhiteSpace size={35} />
            </>
          ) : (
            <>
              <View style={{maxWidth: dynamicScale(225)}}>
                <Text
                  textAlign="center"
                  color="fontGray"
                  variant="plus_jakarta_sans_semibold_20">
                  {STRINGS.login.loginHeader}
                </Text>
              </View>
              <WhiteSpace size={32} />
            </>
          )}
        </View>
        {isLogin ? (
          <>
            <View className="w-11/12 pt-6 pb-6 bg-onxy pl-7 pr-7 flex-row items-center rounded-3xl self-center ">
              <SVG.CRYPTO_ICON className="mr-5" />
              <View>
                <Text color="white" variant="plus_jakarta_sans_semibold_18">
                  0x1743...2343d
                </Text>
                <Text
                  color="fontGray"
                  mt="6"
                  variant="plus_jakarta_sans_semibold_14">
                  Polygon Network
                </Text>
              </View>
            </View>
          </>
        ) : (
          <Button
            title={STRINGS.buttonTitle.login}
            // onPress={() => console.log()}
            onPress={() => refRBSheet.current.open()}
          />
        )}

        {isLogin && (
          <View className="flex-1 pb-3 justify-end">
            <Button
              btnViewStyle={{backgroundColor: theme.colors.white}}
              onPress={() => {
                console.log('Button Press');
                dispatch(userLogout());
              }}
              title="Log out"
            />
          </View>
        )}
      </View>

      <BottomModal height={dynamicScale(BY_THREE_HALF)} refe={refRBSheet}>
        <>
          <View>
            <Text
              textAlign="center"
              color="black"
              mt="5"
              mb="20"
              variant="plus_jakarta_sans_semibold_20">
              {STRINGS.bottomSheet.loginHeader}
            </Text>
            {loginBottomSheet.map((item: any) => {
              return (
                <>
                  <View className="h-9 pl-7 pr-7 flex-row items-center mb-5">
                    <View className="h-9 w-9 bg-gray mr-4 justify-center rounded-3xl ">
                      <Text
                        color="black"
                        textAlign="center"
                        variant="plus_jakarta_sans_semibold_18">
                        {item.id}
                      </Text>
                    </View>
                    <Text color="black" variant="plus_jakarta_sans_semibold_18">
                      {item.string}
                    </Text>
                  </View>
                </>
              );
            })}
            <Button
              onPress={() => {
                refRBSheet.current.close();
                navigation.navigate(THIRD_WEB_WALLET);
              }}
              title={STRINGS.buttonTitle.continue}
            />
          </View>
        </>
      </BottomModal>
    </>
  );
};

export default Login;
