import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/navigation/RouteNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboard from './src/components/Onboarding/Onboard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(true);

  const clearAlreadyLaunched = async () => {
    try {
      await AsyncStorage.removeItem('alreadyLaunched');
      console.log('Successfully cleared alreadyLaunched from AsyncStorage');
    } catch (error) {
      console.error('Error clearing alreadyLaunched:', error);
    }
  };

  const checkFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem('alreadyLaunched');
      if (value === null) {
        // This is the first launch
        await AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        // Not the first launch
        setIsFirstLaunch(false);
      }
    } catch (error) {
      console.error('Error checking first launch:', error);
      // Handle error (optional)
    }
  };

  useEffect(() => {
    checkFirstLaunch();
    // clearAlreadyLaunched();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isFirstLaunch ? (
          <Onboard onClick={() => setIsFirstLaunch(false)} />
        ) : (
          <NavigationContainer>
            <RouteNavigation />
          </NavigationContainer>
        )}
      </PersistGate>
    </Provider>
  );
}

export default App;
