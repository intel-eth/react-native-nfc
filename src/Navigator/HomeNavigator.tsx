import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import {isIOS} from '@/Helper/VersionCheck';
import {theme} from '@/Theme/Theme';
import Login from '@/Containers/Authentication/Login';
import Splash from '@/Containers/Authentication/Splash/Splash';

const Stack = createNativeStackNavigator();
const SearchStack = createStackNavigator();

export const SPLASH = 'Splash';
export const LOGIN = 'Login';

const MainStackNavigator = () => {
  const options = {
    gestureEnabled: true,
  };

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle={isIOS() ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASH} component={Splash} />
        <Stack.Screen name={LOGIN} component={Login} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const OwnerNavigator = () => {
//   return (
//     <NavigationContainer independent>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen
//           name={OWNER}
//           component={Owner}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name={ADD_PROPERTY}
//           component={AddProperty}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export {MainStackNavigator, SearchNavigator, OwnerNavigator};

export {MainStackNavigator};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
