import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';

import { navType } from './Home';


const Engineering : FC<navType>=() => {
  
  return (
  <View style={styles.container}>
    <Text>Engineering</Text>
  </View>
  );
}

export default Engineering

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
