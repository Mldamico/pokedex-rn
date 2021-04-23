import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appTheme} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/FadeInImage';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
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
      <FlatList
        data={simplePokemonList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});
