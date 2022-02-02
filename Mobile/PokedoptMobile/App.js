import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {BottomNavigation} from './BottomNavigation';
import {UserContextProvider} from './userContext';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      //PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }, []);
  return (
    <UserContextProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
