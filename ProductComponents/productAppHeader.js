import React, { useState } from "react";
import { Image, StyleSheet, View, TextInput } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const HeaderBackground = require("../assets/theme/pa/Color.png");

export default function ProductAppHeader({ navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.contanier}>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
        }}
      >
        <MaterialIcons
          style={styles.headerDrawerIcon}
          name="menu"
          size={28}
          onPress={openMenu}
        />
        <View>
          <TextInput style={styles.searchTextInput} placeholder="Search" />
        </View>
        <AntDesign
          name="user"
          size={28}
          color="black"
          style={styles.headerUserIcon}
          onPress={openMenu}
        />
        {/* <Image
          source={HeaderBackground}
          style={styles.headerImage}
          resizeMode="cover"
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
   // marginTop:Constant.statusBarHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
  },
  searchTextInput: {

    backgroundColor: "#f1f1f7",
    borderColor: "#ccc",
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    width:vw(70),
    marginLeft:15
  },

  headerImage: {
    width: vw(100),
    height: 45,
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerDrawerIcon: {
      marginLeft:10
    // position: "absolute",
    // left: 15,
  },
  headerUserIcon: {
      marginLeft:15
    // position: "absolute",
    // right: 15,
  },
});
