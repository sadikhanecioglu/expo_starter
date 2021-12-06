import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,

} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CachedImage from "react-native-expo-cached-image";

export default function ProductSlider({ items }) {

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <CachedImage
          style={{ width: vw(100), height: 200, alignSelf: "center" }}
          source={{ uri: item.image }}
          resizeMode="cover"
          resizeMethod="resize"
        />
        {
          <View style={styles.titleContanier}>
            <Text style={styles.headTitle}>{item.head}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <TouchableHighlight
              style={styles.sliderButton}
              onPress={() => console.log("Buy")}
              underlayColor="#fff"
            >
              <Text style={{ color: "#fff" }}>Buy</Text>
            </TouchableHighlight>
          </View>
        }
      </View>
    );
  };

  return (
    <View >
      <Carousel
        data={items}
        lockScrollWhileSnapping
        windowSize={2}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        // ref={(ref) => (this._ref = ref)}
        renderItem={_renderItem}
        itemWidth={vw(100)}
        sliderWidth={vw(100)}
        loop
        autoplay={true}
        autoplayInterval={3000}
        useScrollView={true}
        onScrollBeginDrag={() => {
          //console.log("Before Index", slideIndex);
          // setVisible(false);
        }}
        onSnapToItem={(slideIndex) => {
          // console.log("Slide Index: ", slideIndex);
          //setVisible(true);
        }}
        //layout={'tinder'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    width: vw(100)
  },
  titleContanier: {
    width: vw(40),
    position: "absolute",
    top: 30,
    left: 20,
  },
  headTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  desc: {
    fontSize: 14,
    color: "#fff",
    paddingTop: 5,
  },
  sliderButton: {
    width: vw(20),
    borderColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
