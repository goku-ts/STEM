import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Science from "../screens/Science";
import Technology from "../screens/Technology";
import Engineering from "../screens/Engineering";
import Maths from "../screens/Maths";
import Bookmark from "../screens/Bookmark";
import { icons, COLORS } from "../constants";
import Profile from "../screens/Science";

const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    height: "10%",
                    paddingLeft: 20,
                    paddingRight: 20,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black : COLORS.lightGray4;

                    switch (route.name) {
                        case "Home2":
                            return (
                                <Image
                                    source={icons.home_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Science":
                            return (
                                <Image
                                    source={icons.science_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Technology":
                            return (
                                <Image
                                    source={icons.tech_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Engineering":
                            return (
                                <Image
                                    source={icons.eng_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Maths":
                            return (
                                <Image
                                    source={icons.maths_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Bookmark":
                            return (
                                <Image
                                    source={icons.bookmark_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home2"
                component={Home}
            />
            <Tab.Screen
                name="Science"
                component={Science}
            />
            <Tab.Screen
                name="Technology"
                component={Technology}
            />
            <Tab.Screen
                name="Engineering"
                component={Engineering}
            />
            <Tab.Screen
                name="Maths"
                component={Maths}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
            />
        </Tab.Navigator>
    )
}

export default Tabs;