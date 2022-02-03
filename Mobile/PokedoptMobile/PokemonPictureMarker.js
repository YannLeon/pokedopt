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
        //console.debug(JSON.stringify(responseJSON));
      });
  }, []);
  console.log(props.location)
  return (
    <Overlay
      bounds={[
        [props.location.latitude - 0.1, props.location.longitude - 0.1],
        [props.location.latitude + 0.1, props.location.longitude + 0.1],
      ]}
      image={'https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358'}
    />
  );
};
