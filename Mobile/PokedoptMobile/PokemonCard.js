import React, {useEffect, useState} from 'react';
import {Text, View, Image, Button, Alert} from 'react-native';
import {Card} from 'react-native-elements';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
export const PokemonCard = props => {
  const [picture, setPicture] = useState(
    'https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358',
  );
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
      .then(response => response.json())
      .then(responseJSON => {
        setPicture(
          responseJSON.sprites.other['official-artwork'].front_default,
        );
        setResponse(responseJSON);
      })
      .catch(e => console.log(e));
  }, [props.name]);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Card>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          {props.name}
        </Text>
        <Image style={{width: 100, height: 100}} source={{uri: picture}} />
        <Button
          onPress={() =>
            props.navigation.navigate('Pokemon', {
              item: response,
            })
          }
          title="Adopt it!"
        />
      </Card>
    </View>
  );
};
