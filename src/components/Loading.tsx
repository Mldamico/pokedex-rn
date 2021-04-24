import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
