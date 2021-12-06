import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../ProductComponents/productBasicHeader";
import GlobalStyles from "../shared/globalStyle";
import { getProduct } from "../states/productDetailsState";
import ProductDetailSlider from "../ProductComponents/productDetailSlider";
import { WebView } from "react-native-webview";
export default function ProductDetail({ route, navigation }) {
  var dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  console.log(isLoading);

  const { id } = route.params;
  useEffect(() => {
    const loadProduct = async () => {
      dispatch(getProduct(id));
    };
    loadProduct();
  }, []);

  return (
    <SafeAreaView style={[styles.contanier, GlobalStyles.droidSafeArea]}>
      <View style={{ zIndex: 1, height: 45 }}>
        <Header navigation={navigation} title="productDetail" />
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <ScrollView style={{ zIndex: 0, flex: 1 }}>
          <View style={{ marginTop: 10 }}>
            <ProductDetailSlider items={product.images} />
          </View>
          <View style={{ marginTop: 20, paddingLeft: 20 }}>
            <Text style={styles.shortTitle}>{product.title}</Text>
          </View>
          <View style={{ marginTop: 5, paddingLeft: 20 }}>
            <Text style={styles.nameText}>{product.name}</Text>
          </View>
          <View style={{ marginTop: 5, paddingLeft: 20 }}>
            <Text style={styles.priceText}>£{product.price}</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
              height: 120,
            }}
          >
            <WebView
              style={{}}
              originWhitelist={["*"]}
              source={{ html: product.description?.substring(0, 470) }}
              automaticallyAdjustContentInsets={false}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      )}
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "#fff",
  },
  shortTitle: {
    fontSize: 16,
    color: "#05944F",
  },
  nameText: {
    fontSize: 24,
    color: "#222831",
  },
  priceText: {
    fontSize: 24,
    color: "#E37946",
  },
  descText: {
    fontSize: 16,
    color: "#222831",
  },
});

//  export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
