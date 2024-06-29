import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '@/Theme/Theme';
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
      <View className="flex-1 bg-white justify-center">
        <Text
          textAlign="center"
          color="black"
          variant="plus_jakarta_sans_semibold_20">
          Wallet Call
        </Text>
      </View>
    </>
  );
};

export default ThirdWebWallet;
