import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Animated } from "react-native";
import { COLORS } from '../constants';
import Card from '../components/Card';
import { images } from "../constants"
import Banner from '../components/Banner';

import { LogBox } from 'react-native';
import Science from './Science';

LogBox.ignoreLogs(['Sending']);

export type navType = {
  navigation: any,
}

export const navWarningHandler =()=>{
  const av = new Animated.Value(0);
  av.addListener(() => { return });
}


const Home: FC<navType> = ({ navigation }) => {
  return (
    <>

      <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={{ alignItems: "center" }}>
          <Banner image={images.stem_img} onpress={() => navigation.navigate("Explore")}/>
        </View>
        <View style={styles.grid}>
          <Card image={images.science_img} name='Science' onpress={() => navigation.navigate("Science")} />
          <Card image={images.tech_img} name='Technology' onpress={() => navigation.navigate("Technology")}/>
        </View>
        <View style={styles.grid}>
          <Card image={images.eng_img} name='Engineering' onpress={() => navigation.navigate("Engineering")}/>
          <Card image={images.maths_img} name='Maths' onpress={() => navigation.navigate("Maths")}/>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    justifyContent: "center",
  },
  header: {
    height: "15@ms",
    backgroundColor: COLORS.lightGray2,
    marginBottom: "5@ms"
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  }
});
