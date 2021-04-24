import React from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#aaa"
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: '#555',
  },
});
