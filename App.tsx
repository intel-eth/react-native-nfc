import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/Theme/Theme';
import {MainStackNavigator} from '@/Navigator/HomeNavigator';

LogBox.ignoreLogs([
  'Warning: ...',
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider {...{theme}}>
        <MainStackNavigator />
      </ThemeProvider>
    </>
  );
}
export default App;
