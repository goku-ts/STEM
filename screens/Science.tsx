import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Animated, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../constants';
import HeaderBar from '../components/HeaderBar';

import { navType } from './Home';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending...']);

const Science : FC <navType>=({navigation}) => {

  return (
  <SafeAreaView style={styles.container}>
    <HeaderBar/>
    <Text>Science</Text>
  </SafeAreaView>
  );
}

export default Science

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
   
  },
});
