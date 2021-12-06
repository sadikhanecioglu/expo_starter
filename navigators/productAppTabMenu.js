import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductAppDashboard from "../screens/productAppDashboard";
import ProductAppSearch from "../screens/productAppSearch";
import ProductAppProfile from '../screens/productAppProfile'



const Tab = createBottomTabNavigator();
export default function ProductAppTabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="ProductDashBoard"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        header:() => null,
      }}
    >
      <Tab.Screen
        name="ProductDashBoard2"
        component={ProductAppDashboard}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="ProductSearch"
        component={ProductAppSearch}
        options={{
          tabBarLabel: "Search",
          headerMode: "none",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductProfile"
        component={ProductAppProfile}
        options={{
          tabBarLabel: "Profile",
          headerMode: "none",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}

      />
    </Tab.Navigator>
  );
}
