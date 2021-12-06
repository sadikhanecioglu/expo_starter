import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import GlobalStyles from "../shared/globalStyle";
import Header from "../ProductComponents/productAppHeader";
export default function ProductAppSearch() {
  return (
    <SafeAreaView style={[styles.contanier, GlobalStyles.droidSafeArea]}>
      <View style={{ zIndex: 1, height: 45 }}>
        <Header navigation={navigation} title="home" />
      </View>

      <ScrollView style={{ zIndex: 0, flex: 1 }}></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  contentText: {
    color: "#000",
  },
});
