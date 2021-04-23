import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appTheme} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={appTheme.pokebolaBG}
      />
      <Text
        style={{...appTheme.title, top: top + 20, ...appTheme.globalMargin}}>
        Pokedex
      </Text>
    </>
  );
};

const styles = StyleSheet.create({});
