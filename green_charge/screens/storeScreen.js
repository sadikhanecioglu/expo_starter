
import React from 'react';
import { StyleSheet, Text,  View, Button, ScrollView } from 'react-native';
import ItemButton from "../../components/itemButton";
const ItemPullover = require("../../assets/theme/cg/tshirt.png");
export default function StoreScreen({navigation}){
    
    return (
    <View style={styles.storeContanier}>
        <View style={styles.headerContainer}>
            <Text style={styles.dateText}>Morning, Sept 30</Text>
            <Text style={styles.headerText}>Hello Samuel,...</Text>
        </View>
        <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Get Promo 40% OFF For Today</Text>
        </View>    
        <View style={styles.categoriesContainer}>
            <Text style={[styles.categoryText, styles.categoryFocus]}>Top</Text>
            <Text style={styles.categoryText}>Outdoor</Text>
            <Text style={styles.categoryText}>Indoor</Text>
            <Text style={styles.categoryText}>Flowers</Text>
        </View>  
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <ItemButton
                text=""
                descText="Baskılı Tişört"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                text=""
                descText="Baskılı Tişört"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                text=""
                descText="Baskılı Tişört"
                icon={ItemPullover}
                style={{}}
                onPress = {() => {
                    navigation.navigate('Product')
                }}
                />
            <ItemButton
                text=""
                descText="Baskılı Tişört"
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
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    headerContainer:{
        height: 80,
        marginBottom: 10,
    },
    dateText:{
        color:'grey',
        fontSize: 14,
    },
    headerText:{
        marginTop: 10,
        color:'black',
        fontWeight:'bold',
        fontSize: 24,   
    },
    promoContainer:{
        backgroundColor:"lightgreen",
        height: 130,
        marginBottom: 30,
        borderRadius: 15,
    },
    promoText:{
        width: 100,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        margin: 25,
    },
    categoriesContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 20,
        marginBottom: 20,
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
        color: "orangered",
        fontWeight: "bold",
    }
});