import {Text, View} from 'react-native';
import React from 'react';
import {MapComponent} from './MapComponent';
export const RadarScreen = () => {
  return (
    <View style={{height:"100%"}}>
      <Text style={{textAlign: 'center', color: 'black'}}>RAFAD</Text>
        <MapComponent/>
    </View>
  );
};
