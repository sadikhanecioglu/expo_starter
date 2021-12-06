import React,{useMemo,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import ProductItem from "./productItem";
 
import { getAllProducts } from "../states/productListState";

import { connect, useDispatch, useSelector } from "react-redux";

export default function ProductCategories({ title }) {
  const dispatch = useDispatch();
  const memoizedValue = useMemo(() => _renderItem, [products]);
  const products = useSelector((state) => state.productListReducer.products);
  const isLoading = useSelector((state) => state.productListReducer.isLoading);

  useEffect(() => {
    const loadProducts = async () => {

      dispatch(getAllProducts());
    };
    loadProducts();
  },[]);
  
 
  

  return (
    <View style={styles.contanier}>
      <View style={{ height: 20, flexDirection: "row" }}>
        <Text styles={styles.contanierTitle}>{title}</Text>
        <TouchableHighlight
          style={{ textAlign: "right", position: "absolute", right: 15 }}
        >
          <Text
            style={{
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            All
          </Text>
        </TouchableHighlight>
      </View>

      <View style={styles.categoryContanier}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
           initialNumToRender={3}
           maxToRenderPerBatch ={3}
           removeClippedSubviews
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={memoizedValue}
            horizontal={true}
            style={{ width: '100%', height: '25%' }}
          ></FlatList>
        )}
      </View>
    </View>
  );
}

const _renderItem = ({item}) => (<ProductItem  item={item} />)




const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
  },
  contanierTitle: {
    fontSize: 16,
    color: "#4c4c4c",
    fontWeight: "bold",
  },
  categoryContanier: {
    width: vw(100),
    height: 225,
    paddingTop: 0,
  },
});

// const mapStateToProps = (state) => {

//   return {
//     products:state.productListReducer.products
//   }

// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     getAllProducts: () => dispatch(getAllProducts())
//   }

// }

// export default connect(mapStateToProps,mapDispatchToProps)(ProductCategories);
