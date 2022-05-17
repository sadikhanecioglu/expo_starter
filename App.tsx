import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Dimensions } from 'react-native';

import ProductNavigation from './navigators/productNavigation';
import {configureStore} from './states/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './green_charge/screens/homeScreen';
import StoreScreen from './green_charge/screens/storeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProductAppSearch from './green_charge/screens/productScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="StoreScreen" component={StoreScreen} />
    </Tab.Navigator>
  );
}



export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log(windowWidth, "x", windowHeight)
  return (
    <Provider store={configureStore}>
         <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}


      >
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Store" component={StoreScreen} />
        <Drawer.Screen name='Product' component={ProductAppSearch} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


