import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import * as React from 'react';
import {MarketScreen} from './MarketScreen';
import {RadarScreen} from './RadarScreen';
const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Marketplace" labelStyle={{fontSize: 12}}>
      <Tab.Screen name={'Marketplace'} component={MarketScreen} />
      <Tab.Screen name={'Radar'} component={RadarScreen} />
    </Tab.Navigator>
  );
};
