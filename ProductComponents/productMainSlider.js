import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import ProductSlider from "./productSlider.js";

export default function ProductMainSlider({}) {

  const images = [
    {
      head: "LG 24 inc Monitor",
      desc: "Buy with Offer",
      image: "https://source.unsplash.com/460x345/?monitor",
      price:120.50,
      offer:15
    },
    {
      head: "Iphone 12 Pro Max",
      desc: "64 gb or 128 Gb",
      image: "https://source.unsplash.com/460x345/?iphone",
      price:115,
      offer:10
    },
    {
      head: "Samsung Laptop",
      desc: "Buy with Offer",
      image: "https://source.unsplash.com/460x345/?laptop",
      price:1150,
      offer:8
    },
    {
      head: "Sony PlayStation",
      desc: "Buy with Offer",
      image: "https://source.unsplash.com/460x345/?ps5",
      price:125,
      offer:22
    },
  ];



  return (

    <ProductSlider
      items = {images}
    />
  );

}


