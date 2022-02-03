import {FlatList, Text, View} from 'react-native';
import React from 'react';
import { PokemonCard } from './PokemonCard';
export const MarketScreen = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', color: 'black'}}>AMRKET</Text>
      <View>
        <FlatList
          data={['kangaskhan','spheal']}
          renderItem={(item) => {<PokemonCard name={item}/>}}
        />
      </View>
    </View>
  );
};
