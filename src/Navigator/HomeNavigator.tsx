import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import {isIOS} from '@/Helper/VersionCheck';
import {theme} from '@/Theme/Theme';
import Login from '@/Containers/Authentication/Login';
import Splash from '@/Containers/Authentication/Splash/Splash';
import MainTab from './BottomTabNavigator/Maintab';
import ThirdWebWallet from '@/Containers/Authentication/EmptyWhite/ThirdWebWallet';
import ActiveNFC from '@/Containers/NFC/ActiveNFC';
import AddNFC from '@/Containers/NFC/AddNFC';
import Home from '@/Containers/Home';
import ReleaseEscrow from '@/Containers/ReleaseEscrow';
import NFTSummery from '@/Containers/NFTSummery';

const Stack = createNativeStackNavigator();
const SearchStack = createStackNavigator();

export const SPLASH = 'Splash';
export const LOGIN = 'Login';
export const MAIN_TAB = 'MainTab';
export const THIRD_WEB_WALLET = 'ThirdWebWallet';

// NFC
export const HOME = 'Home';
export const ACTIVE_NFC = 'ActiveNFC';
export const ADD_NFC = 'AddNFC';
export const RELEASE_ESCROW = 'ReleaseEscrow';
export const NFT_SUMMERY = 'NFTSummery';

const MainStackNavigator = () => {
  const options = {
    gestureEnabled: true,
  };

  return (
    <NavigationContainer>
      <StatusBar animated={true} barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASH} component={Splash} />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={MAIN_TAB}
          component={MainTab}
        />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={THIRD_WEB_WALLET}
          component={ThirdWebWallet}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NFCMintingNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ACTIVE_NFC}
          component={ActiveNFC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ADD_NFC}
          component={AddNFC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RELEASE_ESCROW}
          component={ReleaseEscrow}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NFT_SUMMERY}
          component={NFTSummery}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// export {MainStackNavigator, SearchNavigator, OwnerNavigator};

export {MainStackNavigator, NFCMintingNavigator};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
