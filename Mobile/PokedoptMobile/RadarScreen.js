import {Text, View} from 'react-native';
import React from 'react';
import {MapComponent} from './MapComponent';
export const RadarScreen = () => {
  return (
    <View style={{height:"100%"}}>
        <View style={{height:"10%"}}>
      <Text style={{textAlign: 'center', color: 'black',height:50}}>RAFAD</Text>
        </View>
        <View style={{height:"90%"}}>
        <MapComponent/>
        </View>
    </View>
  );
};
