import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/Helper/ResponsiveFonts';
import {Text} from '@/Theme/Theme';

const Login = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <Text textAlign="center" variant="plus_jakarta_sans_bold_35">
          Login Screen
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Login;
