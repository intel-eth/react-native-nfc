import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {dynamicScale} from '@/Helper/ResponsiveFonts';
import SVG from '@/Utils/Assets/Svg';
import {ADD_NFC} from '@/Navigator/HomeNavigator';

const ActiveNFC = ({navigation}: any) => {
  return (
    <>
      <SingleSafeAreaView />
      <View style={styles.root}>
        <Header withUser />
        <View style={[styles.root, {justifyContent: 'center'}]}>
          <Pressable onPress={() => navigation.navigate(ADD_NFC)}>
            <SVG.NFC_SCAN
              style={{alignSelf: 'center', marginBottom: dynamicScale(30)}}
            />
          </Pressable>
          <Text
            textAlign="center"
            color="dimWhite"
            variant="plus_jakarta_sans_semibold_16">
            Please activate the NFC settings
          </Text>
          <Text
            textAlign="center"
            color="dimWhite"
            variant="plus_jakarta_sans_semibold_16">
            on your phone to continue
          </Text>
        </View>
      </View>
    </>
  );
};

export default ActiveNFC;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
});
