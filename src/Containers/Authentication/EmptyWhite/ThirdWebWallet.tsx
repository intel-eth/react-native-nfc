import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text, theme} from '@/Theme/Theme';
import STRINGS from '@/Utils/Constants/String';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '@/Store/slices/local';

const ThirdWebWallet = ({navigation}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsLogin(true));
      navigation.goBack();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <Text
          textAlign="center"
          color="black"
          variant="plus_jakarta_sans_semibold_20">
          Wallet Call
        </Text>
        {/* <Text>ThirdWebWallet</Text> */}
      </View>
    </>
  );
};

export default ThirdWebWallet;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
  },
});
