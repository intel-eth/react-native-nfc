import {Pressable, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {
  BY_FOUR_HALF,
  BY_THREE_HALF,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import SVG from '@/Utils/Assets/Svg';
import {ADD_NFC} from '@/Navigator/HomeNavigator';
import {BottomModal} from '@/Components/Common/BottomSheet';
import {Button} from '@/Components/Common/Button';
import STRINGS from '@/Utils/Constants/String';
import {useDispatch} from 'react-redux';
import {setIsRemoveFirst} from '@/Store/slices/local';

const ActiveNFC = ({navigation, route}: any) => {
  const refRBSheet = useRef<any>();
  const dispatch = useDispatch();
  const params = route.params.from;
  return (
    <>
      <SingleSafeAreaView />
      <View className="flex-1 bg-blackBG">
        <Header withUser />
        <View className="flex-1 bg-blackBG justify-center">
          <Pressable
            onPress={() => {
              params == 'tagList'
                ? refRBSheet.current.open()
                : navigation.navigate(ADD_NFC);
            }}>
            <SVG.NFC_SCAN className="self-center mb-8" />
          </Pressable>
          {params == 'tagList' ? (
            <>
              <View className="self-center w-0.70">
                <Text
                  textAlign="center"
                  color="dimWhite"
                  variant="plus_jakarta_sans_semibold_16">
                  {`Touch the NFC used for\nminting in the previous\nstep again to complete\nthe final task.`}
                </Text>
              </View>
            </>
          ) : (
            <>
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
            </>
          )}
        </View>
      </View>

      <BottomModal height={dynamicScale(BY_FOUR_HALF)} refe={refRBSheet}>
        <>
          <SVG.BOTTOM_SHEET_CHECK className="self-center mt-15" />
          <Text
            textAlign="center"
            color="black"
            lineHeight={25}
            variant="plus_jakarta_sans_semibold_18">
            {`Congratulations\nYour minting process is complete`}
          </Text>
          <View className="flex-0.7 justify-end">
            <Button
              onPress={() => {
                dispatch(setIsRemoveFirst(true));
                refRBSheet.current.close();
                navigation.goBack();
              }}
              title={STRINGS.buttonTitle.close}
            />
          </View>
        </>
      </BottomModal>
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
