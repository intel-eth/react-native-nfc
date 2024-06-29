import {Image, ScrollView, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {
  BY_FIVE_AND_FIVE_HALF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import Assets from '@/Utils/Assets/Assets';
import {Button} from '@/Components/Common/Button';
import {BottomModal} from '@/Components/Common/BottomSheet';
import SVG from '@/Utils/Assets/Svg';

const ReleaseEscrow = ({navigation}: any) => {
  const refRBSheet = useRef<any>();
  const [data, setData] = useState<any>(0);

  return (
    <>
      <SingleSafeAreaView />
      <View className="flex-1 bg-blackBG">
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <ScrollView>
          <View className="flex-1 bg-blackBG pl-6 pr-6">
            <Text variant="plus_jakarta_sans_bold_24" color="white">
              Themesflat #354
            </Text>
            <Image
              source={Assets.S3}
              style={{
                width: SCREEN_WIDTH - 50,
                resizeMode: 'cover',
                height: SCREEN_HEIGHT / 2,
              }}
              className="mt-4 mb-4"
            />
            <View className="flex-row justify-between items-center">
              <Text variant="plus_jakarta_sans_semibold_16" color="white">
                Kim minjae
              </Text>
              <Text variant="plus_jakarta_sans_semibold_16" color="white">
                $2,000
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text
                variant="plus_jakarta_sans_regular_14"
                fontWeight="400"
                color="placeHolder">
                By 09salon
              </Text>
              <Text
                variant="plus_jakarta_sans_regular_12"
                fontSize={10}
                fontWeight="400"
                color="dimGray">
                Last Price
              </Text>
            </View>

            <Text
              variant="plus_jakarta_sans_regular_12"
              fontWeight="400"
              mt="14"
              textAlign="justify"
              color="white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae
            </Text>
          </View>
          <View className="w-0.90 flex-row items-center justify-between mt-6 self-center mb-8">
            <Button
              btnViewStyle={{width: '48%', backgroundColor: theme.colors.white}}
              txtStyle={{color: theme.colors.black, fontSize: 16}}
              title="Cancel"
              onPress={() => {
                setData(0);
                refRBSheet.current.open();
              }}
            />
            <Button
              btnViewStyle={{width: '48%'}}
              title="Release escrow"
              txtStyle={{fontSize: 16}}
              onPress={() => {
                setData(1);
                refRBSheet.current.open();
              }}
            />
          </View>
        </ScrollView>
      </View>

      <BottomModal
        height={dynamicScale(BY_FIVE_AND_FIVE_HALF)}
        refe={refRBSheet}>
        <View>
          {data == 0 ? (
            <SVG.ERROR className="self-center mt-15" />
          ) : (
            <SVG.PARTY className="self-center mt-15" />
          )}
          <Text
            variant="plus_jakarta_sans_bold_24"
            mt="20"
            textAlign="center"
            color="black">
            {data == 0 ? 'Something is wrong' : 'Congratulations!'}
          </Text>
          <View className="ml-6 mr-6">
            <Text
              variant="plus_jakarta_sans_semibold_18"
              textAlign="center"
              mt="20"
              letterSpacing={-0.5}
              lineHeight={25}
              color="black">
              {data == 0
                ? `There seems to be an issue with the NFC chip you scanned. It may be damaged or not issued by VaultX. Please check the condition of the chip again.`
                : `NFC minting has been successfully completed. Now you can check your artwork information and ownership by touching NFC.`}
            </Text>
          </View>
          <Button
            title={data == 0 ? 'Home' : 'Close'}
            txtStyle={{fontSize: 18}}
            btnViewStyle={{marginTop: dynamicScale(25)}}
            onPress={() => {
              refRBSheet.current.close();
              navigation.goBack();
            }}
          />
        </View>
      </BottomModal>
    </>
  );
};

export default ReleaseEscrow;
