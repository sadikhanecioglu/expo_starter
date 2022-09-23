import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, useWindowDimensions } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";

export default function PaymentScreen({navigation}) {
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight),}]}>  
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} activeOpacity={.75} onPress={() => {navigation.goBack()}}>
          <Image style={{tintColor: "#065649"}} resizeMode="contain" source={require("../../assets/theme/cg/backButton.png")}></Image>
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
          labels={{number: "KART NUMARASI", expiry: "TARİH", cvc: "CVC", name: "AD SOYAD"}}
          placeholders={{number: "0000 0000 0000 0000", expiry: "AA/YY", cvc: "CVC", name: "AD SOYAD"}}
          />
      </View>
      <View style={{width: "25%", alignSelf: "flex-end", marginRight: "12%", marginTop: "5%"}}>
        <Button
          title="ÖDEME"
          color="#065649"
          onPress={() => Alert.alert('Ödemeniz başarıyla gerçekleşti.')}
        />
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: "7%",
    marginTop: "15%",
  },
  title:{
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText:{
    color: "#065649",
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
    height: "35%",
    width: "100%",
    justifyContent: "center",
  },
  label: {
    color: "#065649",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "#065649",
  },
});