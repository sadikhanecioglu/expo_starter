import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function BalanceLayout(props) {
  return (
    <View style={[styles.container, {...props.style}]}>
        <View style={styles.balanceContainer}>
            <Text style={styles.oxyText}>OXY</Text>
            <View style={styles.oxyInner}>
                <Text style={styles.oxyBalance}>628.</Text>
                <Text style={styles.oxyDecimal}>000</Text>
            </View>  
            <View style={styles.oxyProfile}>
                <Image source={require("../assets/theme/cg/ProfileNav.png")} style={styles.profileImg}></Image>
            </View>
        </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: "43%",
    height: "100%",
    justifyContent:"center",
    alignItems:"flex-start",
  },
  balanceContainer: {
    width: 144,
    height: 34,
    borderColor: "#085543",
    borderWidth: 1.75,
    borderRadius: 20,
    flexDirection: "row", 
    padding: 4,
    alignItems: "center",
  },
  oxyText: {
    backgroundColor: "#8fda5a",
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    color: "#085543",
  },
  oxyInner: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 72,
  },
  oxyBalance: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#085543",
  },
  oxyDecimal: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#8fda5a",
  },
  oxyProfile: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: "#f9b50b",
    borderWidth: 2.5,
    marginLeft: 5,
  },
  profileImg: {
    width: 45.5,
    height: 45.5,
  },
});
