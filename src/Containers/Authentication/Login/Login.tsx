import {Header} from './../../../Components/Common/Header';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
      <View style={styles.root}>
        <Header />

        <WhiteSpace size={isLogin ? 50 : 100} />
        {isLogin ? (
          <>
            <SVG.USER_IMAGE style={{alignSelf: 'center'}} />
            <WhiteSpace size={20} />
          </>
        ) : (
          <>
            <SVG.LOGIN_USER style={{alignSelf: 'center'}} />
            <WhiteSpace size={50} />
          </>
        )}

        <View
          style={{
            // maxWidth: dynamicScale(225),
            alignSelf: 'center',
          }}>
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
            <View style={styles.profileView}>
              <SVG.CRYPTO_ICON style={{marginRight: 20}} />
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
          <View
            style={{
              flex: 0.9,
              justifyContent: 'flex-end',
            }}>
            <Button
              btnViewStyle={{backgroundColor: theme.colors.white}}
              onPress={() => dispatch(userLogout())}
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
                  <View style={styles.sheetRoot}>
                    <View style={styles.sheetSubRoot}>
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
  sheetRoot: {
    height: dynamicScale(35),
    paddingHorizontal: dynamicScale(28),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dynamicScale(20),
  },
  sheetSubRoot: {
    height: dynamicScale(34),
    width: dynamicScale(34),
    backgroundColor: theme.colors.gray,
    marginRight: dynamicScale(15),
    justifyContent: 'center',
    borderRadius: 30,
  },
  profileView: {
    width: '87%',
    paddingVertical: 25,
    backgroundColor: theme.colors.onxy,
    alignSelf: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Login;
