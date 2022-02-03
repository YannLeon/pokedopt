import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {PokemonPictureMarker} from './PokemonPictureMarker';

export const MapComponent = () => {
  const [region2, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState(undefined);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    location &&
      setPokemons([
        {
          name: 'spheal',
          location: {
            latitude: location.latitude - 0.001,
            longitude: location.longitude + 0.001,
          },
          radius: 70,
        },
      ]);
  }, [location]);

  const onRegionChange = region => {
    setRegion(region);
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              <Circle
                center={pokemon.location}
                radius={pokemon.radius}
                key={index}
              />
            ))}
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              <PokemonPictureMarker
                location={pokemon.location}
                name={pokemon.name}
                key={index}
              />
            ))}
        </MapView>
      ) : (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
