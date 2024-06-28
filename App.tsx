import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/Theme/Theme';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MainStackNavigator} from '@/Navigator/HomeNavigator';
import {persistor, store} from '@/Store';
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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
          {/* <AccessTokenRefresh loading={<Splash />}> */}
            <MainStackNavigator />
          {/* </AccessTokenRefresh> */}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
export default App;
