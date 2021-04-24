import React from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {appTheme} from '../theme/appTheme';
const {width: windowWidth} = Dimensions.get('window');
export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: windowWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text
            style={{
              ...appTheme.title,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              ...appTheme.globalMargin,
            }}>
            Pokedex
          </Text>
        }
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
