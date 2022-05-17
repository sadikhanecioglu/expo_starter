
import React from 'react';
import { StyleSheet, Text,  View,Button } from 'react-native';
import GreenButton from "../../components/GreenButton";
const MarketIcon = require("../../assets/theme/cg/Market.png");
export default function StoreScreen({navigation}){

    return (
    <View style={styles.headerContanier}>
    <Text style={styles.headerText}>Detail Screen </Text>
    <Button title="Details Screen" onPress={() => navigation.navigate('Home') }/>
    <GreenButton
          text="market"
          descText="Store al OXY kazan!"
          icon={MarketIcon}
          style={{ top: -60 }}
          onPress = {() => {
            navigation.navigate('Product')
          }}
        />
    </View>
    );
}

const styles = StyleSheet.create({

    headerContanier:{
        flex:1,
        backgroundColor:'orange',
        padding:18
    },
    headerText:{
        marginTop:10,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20

        
        
    }


});