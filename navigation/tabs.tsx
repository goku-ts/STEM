import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { icons, COLORS } from "../constants";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel : false,
                headerShown : false,
                style:{height : "10%"},
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black : COLORS.lightGray4;

                    switch (route.name) {
                        case "Home2":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Notification":
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Setting":
                            return (
                                <Image
                                    source={icons.menu_icon}
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
                name="Search"
                component={Profile}
            />
            <Tab.Screen
                name="Notification"
                component={Profile}
            />
            <Tab.Screen
                name="Setting"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default Tabs;