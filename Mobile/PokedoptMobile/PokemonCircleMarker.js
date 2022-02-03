import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Circle} from 'react-native-maps';
import ImageColors from 'react-native-image-colors';

export const PokemonCircleMarker = props => {
  const [picture, setPicture] = useState('');
  const [circleColor, setCircleColor] = useState('#000000');
  useEffect(() => {
    console.debug(props.name);
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemon.name)
      .then(response => response.json())
      .then(responseJSON => {
        //console.debug(JSON.stringify(responseJSON.sprites.front_default));
        setPicture(responseJSON.sprites.front_default);
      })
      .catch(e => console.log(e));
  }, []);
  useEffect(() => {
    if (picture !== '') {
      ImageColors.getColors(picture)
        .then(r => setCircleColor(r.dominant))
        .catch(e => console.log(e));
    }
  }, [picture]);
  return (
    <View>
      <Circle
        center={props.pokemon.location}
        radius={props.pokemon.radius}
        fillColor={circleColor + '50'}
        strokeColor={circleColor}
        strokeWidth={2}
      />
    </View>
  );
};
