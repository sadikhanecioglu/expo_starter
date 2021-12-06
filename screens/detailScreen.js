import React from 'react';
import { StyleSheet, Text,  View,Button } from 'react-native';

export default function DetailScreen({navigation}){

    return (
    <View style={styles.headerContanier}>
    <Text style={styles.headerText}>Detail Screen </Text>
    <Button title="Details Screen" onPress={() => navigation.navigate('Home') }/>
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