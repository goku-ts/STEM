import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { COLORS } from '../constants';


const HeaderBar=() => {
  return (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}></TouchableOpacity>
    <TouchableOpacity style={styles.button}></TouchableOpacity>
  </View>
  );
}

export default HeaderBar

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor: COLORS.darkRed,
    justifyContent: 'space-around',
  },
  button:{
    backgroundColor:"blue",
    height : 20,
    width : 20
  }
});
