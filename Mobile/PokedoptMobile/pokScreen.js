import {Button, Image, Text, Linking, Platform, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
const Vendor = props => {
  const isTablet = DeviceInfo.isTablet();
  const number = Math.floor(Math.random() * 1000000000);
  const randomNameGenerator = num => {
    let res = '';
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
    }
    return res;
  };
  const name = randomNameGenerator(Math.floor(Math.random() * 11))
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
      <Text style={{color: 'black', marginRight: 10}}>
        {name}
      </Text>
      <Button
        title={'contact'}
        onPress={() => {
          if (!isTablet) {
            let phoneNumber = '';

            if (Platform.OS === 'android') {
              phoneNumber = 'tel:0' + String(number);
            } else {
              phoneNumber = 'telprompt:0' + String(number);
            }

            Linking.openURL(phoneNumber).then(r => console.log(r));
          }
          else{
              Linking.openURL('mailto:'+name+'@example.com?subject=Je suis interesse par un pokemon &body=j aimerai me renseigner sur votre '+props.pok)
          }
        }}
      />
    </View>
  );
};
export const PokScreen = props => {
  const pok = props.route.params.item;
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          {pok.species.name}
        </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: pok.sprites.other['official-artwork'].front_default}}
        />
        <Text style={{color: 'black'}}>Vendeurs :</Text>
        <Vendor pok={pok.species.name} />
        <Vendor pok={pok.species.name} />
        <Vendor pok={pok.species.name} />
      </View>
    </View>
  );
};
