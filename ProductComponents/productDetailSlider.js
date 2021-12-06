import React,{useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,

} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CachedImage from "react-native-expo-cached-image";

export default function ProductDetailSlider({ items }) {

    const [activeSlide, setActiveSlide] = useState(0)

    //console.log("items",items);

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          height:'100%'

        }}
      >
        <CachedImage
          style={{ width: 370, height: 273, alignSelf: "center"}}
          source={{ uri: item }}
          resizeMode="cover"
          resizeMethod="resize"
        />

      </View>
    );
  };
  const pagination = () =>  {

    return (
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          containerStyle={{ width:'100%', backgroundColor: 'transparent' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: '#ffc251'
             
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
              backgroundColor: '#ebebeb'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

  return (
    <View style={styles.contanier}>
      <Carousel
        data={items}
        lockScrollWhileSnapping
        windowSize={2}
        initialNumToRender={1}
        maxToRenderPerBatch={1}

        renderItem={_renderItem}
        itemWidth={vw(100)}
        sliderWidth={vw(100)}
        useScrollView={true}
        onScrollBeginDrag={() => {
          //console.log("Before Index", slideIndex);
          // setVisible(false);
        }}
        onSnapToItem={(slideIndex) => {
            setActiveSlide(slideIndex);
          // console.log("Slide Index: ", slideIndex);
          //setVisible(true);
        }}
        //layout={'tinder'}
      />
       { pagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    width: 380,
    height:280,
    padding:10,
    // borderColor: "#ccc",
    // paddingVertical: 5,
    // paddingHorizontal: 8,
    // borderWidth: 1,
    // borderRadius: 15,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    

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
