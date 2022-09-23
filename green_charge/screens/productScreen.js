import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from "react-native";

export default function ProductScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>  
        <TouchableOpacity style={styles.backButton} activeOpacity={.75} onPress={() => {navigation.goBack()}}>
          <Image resizeMode="contain" source={require("../../assets/theme/cg/backButton.png")}></Image>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.productName}>T-Shirt</Text>
        </View>
        <Image style={styles.productImage} resizeMode="contain" source={require("../../assets/theme/cg/tshirt.png")}></Image>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.descTitle}>Açıklama</Text>
        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        <View style={styles.purchaseSet}>
          <View style={styles.purchaseCount}>
            <TouchableOpacity style={styles.quantityButton} activeOpacity={.75} onPress={() => {}}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton} activeOpacity={.75} onPress={() => {}}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.purchaseButton} activeOpacity={.75} onPress={() => {navigation.navigate('Payment')}}>
            <Text style={styles.purchaseText}>Satın Al</Text>
            <Text style={styles.purchasePrice}>₺200</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    backgroundColor: "#31a05f",
  },
  firstContainer: {
    width: "100%",
    height: "60%",
    paddingTop: "15%",
  },
  title:{
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton:{
    width: "5%",
    marginBottom: "-12.5%",
    marginLeft: "6%",
  },
  productName:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 1,
  },
  productImage:{
    width: "100%",
    height: "75%",
    marginTop: "5%",
  },
  secondContainer:{
    backgroundColor: "#ffffff",
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: "8%",
    paddingHorizontal: "6%",
  },
  descTitle:{
    color: "#2f3742",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: .5,
  },
  descText:{
    width: "100%",
    height: "55%",
    marginVertical: "5%",
    color: "#bec1c1",
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 1,
    textAlign: "justify",
    lineHeight: 20,
  },
  purchaseSet:{
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  purchaseCount:{
    flexDirection: "row",
    width: "40%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  quantityButton:{
    width: "22%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#31a05f",
  },
  buttonText:{
    color: "#31a05f",
    fontSize: 20,
    fontWeight: "600",
  },
  quantityText:{
    marginHorizontal: "10%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f3742",
  },
  purchaseButton:{
    width: "60%",
    height: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#31a05f",
    borderRadius: 20,
    paddingHorizontal: "6%",
  },
  purchaseText:{
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "normal",
    letterSpacing: 1,
  },
  purchasePrice:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 25,
  },
});