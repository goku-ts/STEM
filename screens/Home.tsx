import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Webview from '../components/Webview';

export default function Home() {
  return (
  <View style={styles.container}>
    <StatusBar style='dark' />
    <View style={styles.header}></View>
    <Webview/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header :{
    height : 30,
    backgroundColor : "white",
    elevation : 5
  }
});
