import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import {SCREEN_WIDTH, dynamicScale} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {SingleSafeAreaView} from '@/Components/Common/SafeAreaView';
import SVG from '@/Utils/Assets/Svg';
import {Header} from '@/Components/Common/Header';
import STRINGS from '@/Utils/Constants/String';
import {Button} from '@/Components/Common/Button';
import {
  ACTIVE_NFC,
  NFT_SUMMERY,
  RELEASE_ESCROW,
} from '@/Navigator/HomeNavigator';
import {useIsAddNFCSuccess, useIsRemoveFirst} from '@/Hooks/CustomHook';
import {dummyNFC} from '@/Utils/Constants/Dummy';
import {useDispatch} from 'react-redux';
const Home = ({navigation}: any) => {
  const isHaveNFCDetails = useIsAddNFCSuccess();
  const isRemoveFirst = useIsRemoveFirst();
  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isRemoveFirst) {
      setData(dummyNFC.filter((data: any) => data.id != 1));
    } else {
      setData(dummyNFC);
    }
  }, [isRemoveFirst]);

  return (
    <>
      <SingleSafeAreaView />
      <View className="flex-1 bg-blackBG">
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <View className="w-4/3 self-center mb-2">
          <SVG.HOME_BANNER width={SCREEN_WIDTH - 45} className="self-center" />
          <Pressable
            onPress={() =>
              navigation.navigate(ACTIVE_NFC, {
                from: 'banner',
              })
            }
            className="absolute w-4/5 self-center h-1/5 bottom-6 rounded-xl"
          />
        </View>
        <View className="flex-1 bg-dark_jungle_green pl-6 pr-6 rounded-t-3xl">
          {isHaveNFCDetails ? (
            <>
              <FlatList
                scrollEnabled={true}
                data={data}
                renderItem={({item, index}: any) => {
                  return (
                    <View className="flex-row pr-4 pl-4 pt-4 pb-4 bg-onxy mb-3 rounded-2xl items-center">
                      <Image
                        className="h-16 w-16 mr-3 rounded-2xl"
                        source={item.image}
                      />
                      <View className="w-3/4 h-10">
                        <Text
                          color="darkGray"
                          variant="plus_jakarta_sans_semibold_16">
                          {item.tag}
                        </Text>
                        <View className="flex-row justify-between items-center">
                          <Text
                            color="darkGray"
                            fontWeight="500"
                            variant="plus_jakarta_sans_regular_14">
                            {item.count}
                          </Text>
                          <View className="flex-row items-center justify-end">
                            <Button
                              btnViewStyle={styles.btn1}
                              onPress={() => {
                                console.log('PRESS CANCEL');
                                // dispatch(setIsRemoveFirst(false))
                              }}
                              txtStyle={{
                                fontSize: 12,
                                color: theme.colors.placeHolder,
                              }}
                              title="Cancel"
                            />
                            <Button
                              btnViewStyle={styles.btn2}
                              onPress={() => {
                                {
                                  item.id == 1
                                    ? navigation.navigate(ACTIVE_NFC, {
                                        from: 'tagList',
                                      })
                                    : item.id == 2
                                    ? navigation.navigate(RELEASE_ESCROW)
                                    : navigation.navigate(NFT_SUMMERY, {item});
                                }
                              }}
                              txtStyle={{
                                fontSize: 12,
                                color: theme.colors.black,
                              }}
                              title="Continue"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                style={{marginTop: dynamicScale(17)}}
              />
            </>
          ) : (
            <>
              <View className="flex-1 justify-center items-center">
                <SVG.CLOCK_SNOOZE className="mb-3.5" />
                <View className=" align-middle items-center w-2/4">
                  <Text
                    textAlign="center"
                    color="darkGray"
                    variant="plus_jakarta_sans_semibold_16">
                    {STRINGS.home.no_Minting}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn1: {
    width: '35%',
    marginRight: 10,
    height: dynamicScale(23),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.placeHolder,
  },
  btn2: {
    width: '40%',
    backgroundColor: theme.colors.pear,
    borderWidth: 1,
    borderColor: theme.colors.placeHolder,
    height: dynamicScale(23),
  },
});

export default Home;
