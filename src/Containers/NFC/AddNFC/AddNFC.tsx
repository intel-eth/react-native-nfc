import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {dynamicScale} from '@/Helper/ResponsiveFonts';

const AddNFC = () => {
  return (
    <>
      <SingleSafeAreaView />
      <View style={styles.root}>
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <Text
          textAlign="center"
          color="white"
          variant="plus_jakarta_sans_semibold_16">
          AddNFC
        </Text>
      </View>
    </>
  );
};

export default AddNFC;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
});
