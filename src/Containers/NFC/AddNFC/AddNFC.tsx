import {View} from 'react-native';
import React, {useRef} from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {BY_SIX_HALF, dynamicScale} from '@/Helper/ResponsiveFonts';
import {
  ErrorTextMessage,
  InputWithTitle,
} from '@/Components/Common/InputWithTitle';
import {Button} from '@/Components/Common/Button';
import {useFormik} from 'formik';
import {AddNFCSchema} from '@/Utils/Vallidator/ValidationSchema';
import {BottomModal} from '@/Components/Common/BottomSheet';
import SVG from '@/Utils/Assets/Svg';
import STRINGS, {addNFCBottomSheet} from '@/Utils/Constants/String';
import {useDispatch} from 'react-redux';
import {setIsAddNFCSuccess} from '@/Store/slices/local';

const AddNFC = ({navigation}: any) => {
  const refRBSheet = useRef<any>();
  const dispatch = useDispatch();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    setFieldValue,
    values,
  } = useFormik({
    validationSchema: AddNFCSchema,
    initialValues: {
      nfcID: '',
      artworkName: '',
    },
    onSubmit: value => {
      dispatch(setIsAddNFCSuccess(true));
      refRBSheet.current.open();
    },
  });

  const goBackNavigation = () => {
    refRBSheet.current.close();
    navigation.pop(2);
  };

  return (
    <>
      <SingleSafeAreaView />
      <View className="flex-1 bg-blackBG">
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <View className="pr-6 pl-6">
          {/* #region InputBox */}
          <>
            <View className="mb-15">
              <InputWithTitle
                withoutStar
                placeholder="#1646164531313"
                title={'NFC ID'}
                onChangeText={handleChange('nfcID')}
                onBlur={handleBlur('nfcID')}
              />
              {errors.nfcID && touched.nfcID && (
                <ErrorTextMessage errorMessage={errors.nfcID as string} />
              )}
            </View>
            <View className="mb-15">
              <InputWithTitle
                placeholder="Enter name"
                title={'Artwork name'}
                onChangeText={handleChange('artworkName')}
                onBlur={handleBlur('artworkName')}
              />
              {errors.artworkName && touched.artworkName && (
                <ErrorTextMessage errorMessage={errors.artworkName as string} />
              )}
            </View>
          </>
          <Text
            color="fontGray"
            fontWeight="400"
            variant="plus_jakarta_sans_regular_12">
            * Please write the name of the artwork to which this NFC chip will
            be attached. You can edit the name of the work you wrote now during
            the minting stage.
          </Text>
          <View className="w-full flex-row items-center justify-between mt-6">
            <Button
              btnViewStyle={{width: '48%', backgroundColor: theme.colors.white}}
              txtStyle={{color: theme.colors.black, fontSize: 16}}
              title="Cancel"
              onPress={() => console.log()}
            />
            <Button
              btnViewStyle={{width: '48%'}}
              txtStyle={{fontSize: 16}}
              title="Confirm"
              onPress={handleSubmit as () => void}
            />
          </View>
        </View>
      </View>

      <BottomModal height={dynamicScale(BY_SIX_HALF)} refe={refRBSheet}>
        <>
          <View>
            <SVG.BOTTOM_SHEET_CHECK className="self-center" />
            <View className="pl-6 w-0.9 self-center mb-8 pr-6">
              <Text
                color="black"
                textAlign="center"
                variant="plus_jakarta_sans_semibold_18">
                {STRINGS.bottomSheet.registration_complete}
              </Text>
            </View>
            {addNFCBottomSheet.map((item: any) => {
              return (
                <>
                  <View className="h-9 pl-7 pr-7 items-center mb-15 flex-row">
                    <View className="h-9 w-9 bg-gray mr-15 justify-center rounded-30">
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
              onPress={async () => {
                await refRBSheet.current.close();
                goBackNavigation();
              }}
              title={STRINGS.buttonTitle.okay}
            />
          </View>
        </>
      </BottomModal>
    </>
  );
};

export default AddNFC;
