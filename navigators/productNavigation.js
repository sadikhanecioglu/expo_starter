import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProductAppTabMenu from "./productAppTabMenu";
import ProductDetail from "../screens/productDetails";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductHomeStack = () => {
  return (
    <Stack.Navigator 
     
        screenOptions={{
      headerShown: false,
     
    }}
    >
      <Stack.Screen
        name="ProductApps"
        component={ProductAppTabMenu}
 
      />
      <Stack.Screen
        name="ProductDetails"
        component = {ProductDetail}
        
      />
    </Stack.Navigator>
  );
};

export default function ProductNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={ProductHomeStack}
          options={{
            header: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
