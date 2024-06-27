import {Header} from './../../../Components/Common/Header';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Button} from '@/Components/Common/Button';
import STRINGS from '@/Utils/Constants/String';
import SVG from '@/Utils/Assets/Svg';
import WhiteSpace from '@/Components/Common/WhiteSpcae';

const Login = ({navigation}: any) => {
  return (
    <>
      <SingleSafeAreaView />
      <View style={styles.root}>
        <Header />
        <WhiteSpace size={100} />
        <SVG.LOGIN_USER style={{alignSelf: 'center'}} />
        <WhiteSpace size={50} />
        <View style={{width: 200, alignSelf: 'center'}}>
          <Text
            textAlign="center"
            color="fontGray"
            variant="plus_jakarta_sans_semibold_20">
            {STRINGS.login.loginHeader}
          </Text>
        </View>
        <WhiteSpace size={32} />
        <Button
          title={STRINGS.buttonTitle.login}
          onPress={() => console.log()}
        />
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

export default Login;
