import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Dimensions
} from "react-native";
import CachedImage from "react-native-expo-cached-image";
const w =  Dimensions.get('window').width / 4 -10 ;
export const COLORS = {
  blue: '#1266f1',
  pink: '#dd3dd6',
  orange:'#fc795c',
  green:'#008946',
  darkblue:'#36517f',
  lightpink:'#ff469b',
  purple:'#6a4f97',
  yellow:'#daa520',
  lightblue:'#4e51e9',
  lightyellow:'#dad820'

}
export default function CategoriesList({ items }) {


    const getColor = (index) => {

      const colorNames = ["#1266f1","#dd3dd6","#fc795c","#008946","#36517f","#ff469b","#6a4f97","#daa520","#4e51e9","#dad820"];
      if(index > colorNames.length)
      index = index - colorNames.length;
      return colorNames[index];

    };

    const _renderCategory = ({ item,index }) => {
    return (
      <TouchableHighlight underlayColor='#fcf6f6' onPress={() => console.log(item.id)}>
      <View style={styles.cardContanier} >
      
        <View style={styles.card_template}>
          <CachedImage
            style={styles.card_image}
            source={{
              uri: item.image,
            }}
          />
          <View style={[styles.text_container,{backgroundColor:getColor(index)}]}>
            <Text style={styles.card_title}>{item.name}</Text>
          </View>
        </View>
     
      </View>
      </TouchableHighlight>  
      

    );
  };

  return (
    <View style={{  flex: 1, flexDirection: 'row', justifyContent: 'flex-start' ,flexWrap: 'wrap',  paddingLeft:10,}}>
      {items.map((item,index) => {
        return (
          <View key={item.id} style={styles.colContanier}>{_renderCategory({item,index})}</View>
        );
      })}
   
    </View>
  );
}

const styles = StyleSheet.create({
  cardContanier: {
    width: 85,
    height: 120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
  },
  card_template:{
    alignItems:'center',
    height:120
  },
  card_image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 85,
    height: 36,
    bottom:0,
    paddingBottom:5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  card_title: {
    color: "white",
    fontSize:14,
  },
  colContanier:{
      
      width:w,
      justifyContent:'center',
      alignItems:'center',
      margin:3,
      padding:10,
     
  }
});
