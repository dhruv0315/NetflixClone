import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import ComingSoon from "./screens/ComingSoon";
import FastLaughs from "./screens/FastLaughs";
import Search from "./screens/Search";
import Downloads from "./screens/Downloads";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {backgroundColor: 'black'}
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontWeight: '700'},
            tabBarActiveTintColor: 'white',
            headerShown: false,
            tabBarIcon: () => <Icon name="home" color="white" size={25} />,
          }}
        />
        <Tab.Screen
          name="ComingSoon"
          component={ComingSoon}
          options={{
            tabBarLabel: 'Coming Soom',
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle: {fontWeight: '700'},
            headerShown: false,
            tabBarIcon: () => <Icon name="video-library" color="white" size={25} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarActiveTintColor: 'white',
            headerShown: false,
            tabBarLabelStyle: {fontWeight: '700'},
            tabBarIcon: () => <Icon name="search" color="white" size={25} />,
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            tabBarLabel: 'Downloads',
            tabBarActiveTintColor: 'white',
            headerShown: false,
            tabBarLabelStyle: {fontWeight: '700'},
            tabBarIcon: () => <Icon name="file-download" color="white" size={25} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
