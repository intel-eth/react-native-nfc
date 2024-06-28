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
      <View style={styles.root}>
        <Header withUser headerStyle={{marginBottom: dynamicScale(20)}} />
        <View style={{width: SCREEN_WIDTH - 45, alignSelf: 'center'}}>
          <SVG.HOME_BANNER
            width={SCREEN_WIDTH - 45}
            style={{alignSelf: 'center', marginBottom: 5}}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(ACTIVE_NFC, {
                from: 'banner',
              })
            }
            style={styles.bliendBtn}
          />
        </View>

        <View style={styles.subRoot}>
          {isHaveNFCDetails ? (
            <>
              <FlatList
                scrollEnabled={true}
                data={data}
                renderItem={({item, index}: any) => {
                  return (
                    <View style={styles.r1}>
                      <Image style={styles.subRoot1} source={item.image} />
                      <View style={styles.main}>
                        <Text
                          color="darkGray"
                          variant="plus_jakarta_sans_semibold_16">
                          {item.tag}
                        </Text>
                        <View style={styles.root1}>
                          <Text
                            color="darkGray"
                            fontWeight="500"
                            variant="plus_jakarta_sans_regular_14">
                            {item.count}
                          </Text>
                          <View style={styles.btnView}>
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
              <View style={{flex: 1, justifyContent: 'center'}}>
                <SVG.CLOCK_SNOOZE
                  style={{alignSelf: 'center', marginBottom: dynamicScale(10)}}
                />
                <View style={{width: SCREEN_WIDTH / 2, alignSelf: 'center'}}>
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
  root: {
    flex: 1,
    backgroundColor: theme.colors.blackBG,
  },
  bliendBtn: {
    position: 'absolute',
    height: dynamicScale(42),
    bottom: 30,
    width: '91%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  subRoot: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: theme.colors.dark_jungle_green,
    paddingHorizontal: 24,
    borderTopLeftRadius: dynamicScale(30),
    borderTopRightRadius: dynamicScale(30),
  },
  r1: {
    width: '100%',
    paddingVertical: dynamicScale(16),
    paddingHorizontal: dynamicScale(16),
    marginBottom: dynamicScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.onxy,
    borderRadius: 20,
  },
  subRoot1: {
    height: dynamicScale(62),
    width: dynamicScale(62),
    borderRadius: 15,
    marginRight: 10,
  },
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
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  root1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    height: dynamicScale(40),
    width: '75%',
  },
});

export default Home;
