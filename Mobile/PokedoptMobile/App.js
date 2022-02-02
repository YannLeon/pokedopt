import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {BottomNavigation} from './BottomNavigation';
import {UserContextProvider} from './userContext';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
