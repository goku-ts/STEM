import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './navigation/tabs';
import Home from './screens/Home';
import Profile from './screens/Settings';
import theme from './constants/theme';
import Science from './screens/Science';
import Technology from './screens/Technology';
import Engineering from './screens/Engineering';
import Maths from './screens/Maths';
import Explore from './screens/Explore';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


type RootStackParamList = {
  Home: undefined;
  Science: undefined;
  Explore: undefined;
  Engineering: undefined;
  Maths: undefined;
  Technology: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'Home'}
    >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Engineering" component={Engineering} />
        <Stack.Screen name="Maths" component={Maths} />
        <Stack.Screen name="Explore" component={Explore} />
         {/*  */}
        
    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


