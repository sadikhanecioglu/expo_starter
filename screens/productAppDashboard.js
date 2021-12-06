import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import ProductMainSlider from "../ProductComponents/productMainSlider.js";
import ProductCategories from "../ProductComponents/productCategories.js";
import CategoriesList from "../ProductComponents/categoriesList.js";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Header from "../ProductComponents/productAppHeader";
import GlobalStyles from "../shared/globalStyle";
import {
  Categories,
} from "../demoContent/discountedProducts";


export default function ProductAppDashboard({ navigation }) {





  return (
    <SafeAreaView style={[styles.contanier, GlobalStyles.droidSafeArea]}>
      <View style={{ zIndex: 1, height: 45 }}>
        <Header navigation={navigation} title="home" />
      </View>

      <ScrollView style={{ zIndex: 0, flex: 1 }}>
        <View style={{ marginTop: 0 }}>
          <ProductMainSlider />
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
          <ProductCategories   title="Bestsellers" />
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
          <CategoriesList items={Categories} />
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
        <ProductCategories  title="Discounted product" />
          {/* <ProductCategories title="Discounted products" /> */}
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
        <ProductCategories title="Discounted product" />
          {/* <ProductCategories title="Discounted products" /> */}
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
        <ProductCategories  title="Discounted product" />
          {/* <ProductCategories title="Discounted products" /> */}
        </View>
        <View style={{ marginTop: 10, flex: 1 }}>
        <ProductCategories title="Discounted product" />
          {/* <ProductCategories title="Discounted products" /> */}
        </View>
        

        <View style={{ marginTop: 50, flex: 1 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentText: {
    color: "#000",
  },
});
