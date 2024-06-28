import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import {Text, theme} from '@/Theme/Theme';
import {Header} from '@/Components/Common/Header';
import {
  BY_SIX_HALF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dynamicScale,
} from '@/Helper/ResponsiveFonts';
import Assets from '@/Utils/Assets/Assets';
import SVG from '@/Utils/Assets/Svg';
import {Button} from '@/Components/Common/Button';
import {BottomModal} from '@/Components/Common/BottomSheet';

const NFTSummery = ({navigation, route}: any) => {
  const params = route.params.item;
  const refRBSheet = useRef<any>();

  return (
    <>
      <SingleSafeAreaView />
      <View style={styles.root}>
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <ScrollView>
          <View style={[styles.root, {paddingHorizontal: dynamicScale(24)}]}>
            <Text variant="plus_jakarta_sans_bold_24" color="white">
              Themesflat #354
            </Text>
            <Image
              source={params.id == 4 ? Assets.S4 : Assets.S2}
              style={{
                width: SCREEN_WIDTH - 50,
                resizeMode: 'cover',
                // height: 250,
                height: SCREEN_HEIGHT / 3.5,
                marginTop: dynamicScale(15),
                marginBottom: dynamicScale(15),
              }}
            />
            <View style={styles.rowView}>
              <Text variant="plus_jakarta_sans_semibold_16" color="white">
                Kim minjae
              </Text>
              <Text variant="plus_jakarta_sans_semibold_16" color="white">
                $2,000
              </Text>
            </View>
            <View style={styles.rowView}>
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

            <View
              style={{
                width: '100%',
                paddingBottom: 15,
                paddingTop: 10,
                backgroundColor: theme.colors.black,
                paddingHorizontal: dynamicScale(20),
                marginTop: dynamicScale(24),
                borderRadius: 20,
                borderWidth: 2,
                borderColor: theme.colors.borderColor,
              }}>
              <SVG.BLUE_CHECK style={{alignSelf: 'center'}} />
              {params.id == 4 ? (
                <>
                  <Text
                    variant="plus_jakarta_sans_bold_16"
                    mt="14"
                    letterSpacing={-0.5}
                    textAlign="center"
                    color="white">
                    Fascinated by this artwork?
                  </Text>
                  <Text
                    variant="plus_jakarta_sans_bold_16"
                    letterSpacing={-0.5}
                    textAlign="center"
                    color="white">
                    Make it yours today on VaultX!
                  </Text>
                </>
              ) : (
                <Text
                  variant="plus_jakarta_sans_bold_16"
                  mt="14"
                  letterSpacing={-0.5}
                  textAlign="center"
                  color="white">
                  The blockchain confirms{' '}
                  <Text
                    variant="plus_jakarta_sans_bold_16"
                    mt="14"
                    textTransform="capitalize"
                    letterSpacing={-0.9}
                    textAlign="center"
                    color="pear">
                    you as the current rightful owner of this artwork.
                  </Text>
                  What an amazing piece you have!
                </Text>
              )}
            </View>
            <Button
              btnViewStyle={{
                width: '48%',
                marginTop: dynamicScale(24),
                marginBottom: 24,
                backgroundColor: theme.colors.white,
              }}
              txtStyle={{color: theme.colors.black, fontSize: 16}}
              title="Close"
              onPress={() => refRBSheet.current.open()}
            />
          </View>
        </ScrollView>
      </View>
      <BottomModal height={dynamicScale(BY_SIX_HALF)} refe={refRBSheet}>
        <View style={{}}>
          <SVG.WARNING style={{alignSelf: 'center', marginTop: 15}} />
          <Text
            variant="plus_jakarta_sans_bold_24"
            mt="14"
            textAlign="center"
            color="black">
            Sign Up on
          </Text>
          <Text
            variant="plus_jakarta_sans_bold_24"
            textAlign="center"
            color="black">
            Our Website First!
          </Text>
          <View style={{marginHorizontal: 25}}>
            <Text
              variant="plus_jakarta_sans_semibold_18"
              textAlign="center"
              mt="20"
              letterSpacing={-0.5}
              lineHeight={25}
              color="black">
              To use the app, please sign up first on the Vault-x.io website.
              After completing your registration, we kindly ask you to log in
              again. We look forward to seeing you again!
            </Text>
          </View>
          <Button
            title={'Close'}
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

export default NFTSummery;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
