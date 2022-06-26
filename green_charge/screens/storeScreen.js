import React from 'react';
import { StyleSheet, Text,  View, Button, ScrollView, Image } from 'react-native';
import ItemButton from "../../components/itemButton";
const ItemPullover = require("../../assets/theme/cg/tshirt.png");
import BalanceLayout from "../../components/BalanceLayout";
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
            <Text style={styles.promoText}>Get Promo 40% OFF For Today</Text>
        </View>    
        <View style={styles.categoriesContainer}>
            <Text style={[styles.categoryText, styles.categoryFocus]}>All</Text>
            <Text style={styles.categoryText}>Outdoor</Text>
            <Text style={styles.categoryText}>Indoor</Text>
            <Text style={styles.categoryText}>NFT</Text>
        </View>  
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                descText="T-Shirt"
                descPrice="20"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="20"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="20"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                descText="T-Shirt"
                descPrice="20"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />                                                
        </ScrollView>       
    </View>
    );
}

const styles = StyleSheet.create({

    storeContanier:{
        flex: 1,
        backgroundColor:'whitesmoke',
        paddingTop: "12.75%",
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
        marginBottom: "8%",
        borderRadius: 15,
    },
    promoText:{
        width: "30%",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        margin: "7%",
    },
    categoriesContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        height: "4%",
        marginBottom: "5%",
    },
    categoryText:{
        color: "grey",
        fontWeight: "normal",
    },
    itemContainer:{
        flexGrow: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categoryFocus:{
        color: "#065649",
        fontWeight: "bold",
    }
});