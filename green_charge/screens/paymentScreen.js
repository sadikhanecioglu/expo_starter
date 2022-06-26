import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";

export default function PaymentScreen({navigation}) {
  return (
    <View style={styles.container}>  
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} activeOpacity={.75} onPress={() => {navigation.navigate('Product')}}>
          <Image resizeMode="contain" source={require("../../assets/theme/cg/backButton.png")}></Image>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>Ödeme Bilgileri</Text>
        </View>
      </View>  
      <View style={styles.paymentContainer}>
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          allowScroll
          labelStyle={styles.label}
          inputStyle={styles.input}
          validColor={"black"}
          invalidColor={"red"}
          placeholderColor={"darkgray"}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#065649",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: "10%",
  },
  title:{
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 1,
    lineHeight: 22,
  },
  backButton:{
    width: "5%",
    marginBottom: "-3.5%",
    marginLeft: "6%",
  },
  paymentContainer: {
    height: "70%",
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "white",
  },
});