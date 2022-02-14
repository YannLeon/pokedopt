import {Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {MapComponent} from './MapComponent';
import {Picker} from '@react-native-picker/picker';
import {UserContext} from './userContext';
export const RadarScreen = () => {
  const [selectedMode, setSelectedMode] = useState('DRIVING');
    const [userContext, setUserContext] = useContext(UserContext);
  useEffect(()=>{
      setUserContext(data => ({...data, mode: selectedMode}));
  },[selectedMode])
  return (
    <View style={{height: '100%'}}>
      <View style={{height: '10%'}}>
        <Picker
          selectedValue={selectedMode}
          onValueChange={(itemValue, itemIndex) => setSelectedMode(itemValue)}>
          <Picker.Item style={{color:"black"}} label="DRIVING" value="DRIVING" />
          <Picker.Item style={{color:"black"}} label="WALKING" value="WALKING" />
        </Picker>
      </View>
      <View style={{height: '90%'}}>
        <MapComponent />
      </View>
    </View>
  );
};
