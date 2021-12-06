import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.headerContanier}>
      <View style={styles.logoWrap}>
        <Image
          source={require("../assets/theme/cg/ChargeGreen_Logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.userToolWrap}>

      <ImageBackground
          source={require('../assets/theme/cg/Coin_Box.png')}
          style={{
            width: 191,
            height: 40,
            marginTop: 10,
            marginLeft:5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.textDecimal}>00.600.</Text>
          <Text style={styles.textDecimalMore}>000</Text>
          <Text style={styles.textOxygen}>OXYGEN</Text>
        </ImageBackground>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContanier: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 40,
    flexWrap: "wrap",
  },
  headerText: {
    marginTop: 0,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  logoWrap: {
    flex: 4,
    backgroundColor: "#fff",
  },
  userToolWrap: {
    flex: 4,
    backgroundColor: "#fff",
  },
  logoImage: {
    width: 145,
    height: 50,
    margin:15,
    marginTop:0
  },
  textOxygen: {
    color: '#006666',
    textAlign: 'right',
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  textDecimal: {
    flex: 1.2,
    textAlign: 'left',
    color: '#006666',
    fontSize: 18,
    marginTop: 8,
    marginLeft: 15,
  },
  textDecimalMore: {
    flex: 1,
    textAlign: 'left',
    color: '#99cc66',
    fontSize: 13,
    marginTop: 3,
    marginLeft: 0,
  },
});
