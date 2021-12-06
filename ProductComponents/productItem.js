import React from "react";
import { StyleSheet, Text, View,TouchableHighlight} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CachedImage from "react-native-expo-cached-image";
import { useNavigation } from '@react-navigation/native';

export default function ProductItem({ item}) {

  const navigation = useNavigation();

  return (
    <TouchableHighlight underlayColor='#fcf6f6' onPress={() =>   navigation.push('ProductDetails',{id:item.id})}>
    <View style={styles.productContanier}>
      <View style={styles.imageContanier}>
        <View
          style={{
            backgroundColor: "#e10052",
            position: "absolute",
            top: "13%",
            left: "3%",
            zIndex: 1,
          }}
        >
          <Text style={styles.productDiscount}>{item.offer}%</Text>
        </View>
        <CachedImage source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.productTitle}>{item.name}</Text>
      <View style={styles.detailContanier}>
        <Text style={styles.productPrice}>£{item.price}</Text>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  productContanier: {
    width: vw(40),
    height: "95%",
    backgroundColor: "#fff",
    borderColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 2,
    borderRadius: 10,
    margin:5,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  imageContanier: {
    width: vw(30),
    paddingTop: "10%",
    height: "83%",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    zIndex: 0,

    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#fff",
  },
  productTitle: {
    paddingLeft: 10,
    fontSize: 12,
  },
  detailContanier: {},
  productPrice: { paddingLeft: 10, color: "blue" },
  productDiscount: { padding: 2, color: "#fff", fontSize: 12 },
});
