import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {PokemonPictureMarker} from './PokemonPictureMarker';
import {PokemonCircleMarker} from './PokemonCircleMarker';
import MapViewDirections from 'react-native-maps-directions';
import {UserContext} from './userContext';

export const MapComponent = () => {
  const [region2, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState(undefined);

  const [pokemons, setPokemons] = useState([]);
  const [showDirection, setShowDirection] = useState(false);
  const [directionStart, setDirectionStart] = useState(null);
  const [directionEnd, setDirectionEnd] = useState(null);
  const [userContext, setUserContext] = useContext(UserContext);

  useEffect(() => {
    location &&
      setPokemons([
        createPokemon("spheal"),
        createPokemon("kangaskhan"),
        createPokemon("charizard"),
          createPokemon("charmander"),
          createPokemon("zubat"),
        createPokemon("rowlet"),
        createPokemon("geodude"),
        createPokemon("nuzleaf"),
          createPokemon("chikorita"),
          createPokemon("bastiodon"),
          createPokemon("pikachu"),
          createPokemon("pichu"),
        createPokemon("turtwig"),
        createPokemon("piplup"),
        createPokemon("mewtwo")

      ]);
  }, [location]);

  const randLatLong = () => {
    return (Math.random() / 75) * (Math.random() > 0.5 ? 1 : -1);
  };
  const randRadius = () => {
    const radius = Math.random() * 250
    return radius<40?radius+40:radius;
  };

  const createPokemon = name => {
    return {
      name: name,
      location: {
        latitude: location.latitude + randLatLong(),
        longitude: location.longitude + randLatLong(),
      },
      radius: randRadius(),
    };
  };
  useEffect(() => {
    if (directionEnd !== null && directionStart !== null) {
      setShowDirection(true);
    }
  });

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
              <PokemonCircleMarker pokemon={pokemon} key={index} />
            ))}
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              <PokemonPictureMarker
                location={pokemon.location}
                name={pokemon.name}
                radius={pokemon.radius}
                key={index}
                onPress={() => {
                  setDirectionStart(location);
                  setDirectionEnd(pokemon.location);
                }}
              />
            ))}
          {showDirection&&
          <MapViewDirections
              origin={directionStart}
              destination={directionEnd}
              apikey={"AIzaSyDvin_US8hJsgioDsVYFvM6RubKu6kRy7E"}
              mode={userContext.mode}
          />}
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
