import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {theme} from '@/Theme/Theme';
import {isAndroid} from '@/Helper/VersionCheck';
import {dynamicScale} from '@/Helper/ResponsiveFonts';
import Login from '@/Containers/Authentication/Login';
import SVG from '@/Utils/Assets/Svg';
import {NFCMintingNavigator} from '../HomeNavigator';
const Tab = createBottomTabNavigator();

const MainTab = ({navigation}: any) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.card, styles.shadowProp],
          tabBarLabel: () => null,
        }}>
        <Tab.Screen
          name="Home"
          component={NFCMintingNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <>{focused ? <SVG.FIRST /> : <SVG.UN_ACTIVE_FIRST />}</>
            ),
          }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          // listeners={() => ({
          //   tabPress: e => {
          //     setActiveTab('Login');
          //   },
          // })}
          options={{
            // lazy: true,
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <>{focused ? <SVG.SECOND /> : <SVG.UN_ACTIVE_SECOND />}</>
            ),
          }}
        />
      </Tab.Navigator>
      <SafeAreaView style={{backgroundColor: theme.colors.black}} />
    </>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: isAndroid() ? '#333' : 'rgba(51, 51, 51, 0.15)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
  card: {
    backgroundColor: theme.colors.black,
    borderTopWidth: 0,
    height: dynamicScale(65),
    paddingTop: 30,
    paddingHorizontal: dynamicScale(15),
  },
});
export default MainTab;
