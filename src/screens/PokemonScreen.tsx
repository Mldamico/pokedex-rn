import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
interface PokemonScreenProps
  extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen: React.FC<PokemonScreenProps> = ({
  route,
  navigation,
}) => {
  const {top} = useSafeAreaInsets();
  const {
    simplePokemon: {name, id, picture},
    color,
  } = route.params;
  return (
    <View>
      <View style={{backgroundColor: color, ...styles.headerContainer}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 10}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" color="white" size={40} />
        </TouchableOpacity>
        <Text style={{...styles.pokemonName, top: top + 40}}>
          {name + '\n'} #{id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
});
