import React from 'react';
import { StyleSheet, Text,  View, ScrollView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ItemButton from "../../components/itemButton";
import BalanceLayout from "../../components/BalanceLayout";
const ItemPullover = require("../../assets/theme/cg/tshirt.png");

function All({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                /> 
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />                                                 
        </ScrollView>
    );
}

function Outdoor({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                /> 
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />                                               
        </ScrollView>
    );
}

function Indoor({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                /> 
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />                                               
        </ScrollView>
    );
}

function NFT({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                /> 
            <ItemButton
                descText="T-Shirt"
                descPrice="200"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />                                               
        </ScrollView>
    );
}

const Tab = createMaterialTopTabNavigator();
  
export default function StoreScreen({navigation}){
    return (
    <View style={styles.storeContanier}>
        <View style={styles.headerContainer}>
            <Image style= {styles.logo} source={require("../../assets/theme/cg/LogoCG.png")}></Image>
            <BalanceLayout
            style={{}}
            />
        </View>
        <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Arkadaşlarını Davet Et OXY Kazan!</Text>
        </View>    
        <Tab.Navigator
        //initialRouteName="floor"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#065649',
                tabBarInactiveTintColor: "#C4C4C4",
                tabBarLabelStyle: { fontSize: 14, textTransform: 'none', fontWeight: "400" },
                tabBarItemStyle: {flexDirection: "row"},
                tabBarIndicatorStyle: {
                    backgroundColor: "transparent"
                },
                tabBarStyle: {
                    justifyContent: "center",
                    height: "12%",
                    backgroundColor: "whitesmoke",
                }
            }}
        >
            <Tab.Screen 
                name="all" 
                component={All}
                options={{
                    tabBarLabel: 'All',
                }}
            />
            <Tab.Screen 
                name="out" 
                component={Outdoor} 
                options={{
                    tabBarLabel: 'Outdoor',
                }}
            />
            <Tab.Screen 
                name="in" 
                component={Indoor} 
                options={{
                    tabBarLabel: 'Indoor',
                }}
            />
            <Tab.Screen 
                name="nft" 
                component={NFT} 
                options={{
                    tabBarLabel: 'NFT',
                }}
            />
        </Tab.Navigator>
    </View>
    );
}

const styles = StyleSheet.create({

    storeContanier:{
        flex: 1,
        backgroundColor:'whitesmoke',
        paddingTop: "7.5%",
        paddingHorizontal: "5%",
    },
    headerContainer: {
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        paddingRight: "8.25%",
        marginBottom: "6%",
    },
    logo: {
        width: "45%",
        resizeMode: "contain",
    },
    promoContainer:{
        backgroundColor:"#31a05f",
        height: "20%",
        borderRadius: 20,
        justifyContent: "center",
    },
    promoText:{
        width: "60%",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        margin: "5%",
        lineHeight: 30,
    },
    itemContainer:{
        flexGrow: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "4%",
    },
});