import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import * as React from 'react';
import {MarketScreen} from './MarketScreen';
import {RadarScreen} from './RadarScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokScreen} from './pokScreen';
const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  const Stack = createNativeStackNavigator();

  const MarketNav = () => {
    return (
      <Stack.Navigator initialRouteName={'MarketPlace'}>
        <Stack.Screen name={'MarketPlace'} component={MarketScreen} />
        <Stack.Screen name={'Pokemon'} component={PokScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator initialRouteName="Marketplace" labelStyle={{fontSize: 12}}>
      <Tab.Screen name={'Marketplace'} component={MarketNav} />
      <Tab.Screen name={'Radar'} component={RadarScreen} />
    </Tab.Navigator>
  );
};
