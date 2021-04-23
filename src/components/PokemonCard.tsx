import React, {useState, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import ImageColors from 'react-native-image-colors';
import {FadeInImage} from './FadeInImage';
import {useNavigation} from '@react-navigation/native';

const {width: windowWidth} = Dimensions.get('window');

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  useEffect(() => {
    getImageColor();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getImageColor = async () => {
    const colors = await ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    });
    if (!isMounted.current) return;
    colors.platform === 'android'
      ? setBgColor(colors.dominant || 'grey')
      : setBgColor(colors.background || 'grey');
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  pokemon: {
    width: 110,
    height: 110,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
