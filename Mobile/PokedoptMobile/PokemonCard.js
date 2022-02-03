import React, {useEffect, useState} from 'react';
import {Text, View,Image} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
export const PokemonCard = props =>{
    const [picture, setPicture] = useState(
        'https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358',
      );
      useEffect(() => {
        console.debug(props.name);
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
          .then(response => response.json())
          .then(responseJSON => {
            console.debug(JSON.stringify(responseJSON.sprites.front_default));
            setPicture(responseJSON.sprites.front_default)
          }).catch(e=>console.log(e));

      }, []);
    return(
        <View style={{justifyContent: 'center',alignItems: 'center',}}>
            <Image style={{width: 100, height: 100}} source ={{uri:picture}}/>
            <Text style={{color:"black", textAlign: 'center'}} >{props.name}</Text>
        </View>
    )
}