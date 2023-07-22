import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Engineering=() => {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
