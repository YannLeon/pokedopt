import React, {useEffect, useState} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Circle,
  Marker,
  Overlay,
} from 'react-native-maps';

export const PokemonPictureMarker = props => {
  const [picture, setPicture] = useState(
    'https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358',
  );
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
      .then(response => response.json())
      .then(responseJSON => {
        setPicture(responseJSON.sprites.front_default);
      });
  }, []);
  console.log(props.location)
  return (
    <Overlay
      bounds={[
        [props.location.latitude - props.radius / 75000, props.location.longitude - props.radius / 100000],
        [props.location.latitude + props.radius / 130000, props.location.longitude + props.radius / 60000],
      ]}
      image={picture}
    />
  );
};
