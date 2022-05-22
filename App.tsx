import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Dimensions, Image, Text, View, ImageBackground } from 'react-native';
import ProductNavigation from './navigators/productNavigation';
import {configureStore} from './states/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './green_charge/screens/homeScreen';
import StoreScreen from './green_charge/screens/storeScreen';
import ProfileScreen from './green_charge/screens/profileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProductAppSearch from './green_charge/screens/productScreen';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false, tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: "10%",
          ...styles.shadow
        }
      }}>
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image
                source={require("./assets/theme/cg/HomeNav.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#86cd4e" : "#a3a6ab",
                }}
              />  
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="StoreScreen" 
        component={StoreScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image
                source={require("./assets/theme/cg/StoreNav.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#86cd4e" : "#a3a6ab",
                }}
              />  
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image
                source={require("./assets/theme/cg/ProfileNav.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#86cd4e" : "#4f4f4f",
                }}
              />  
            </View>
          ),
        }}
      />
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Store" component={StoreScreen} />
        <Drawer.Screen name='Product' component={ProductAppSearch} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
    shadow: {
      shadowColor:"#7F5DF0",
      shadowOffset:{
        width:0, 
        height:10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }
});


