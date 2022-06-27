import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function itemButton(props) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {...props.style}]} activeOpacity={0}
    onPress={props.onPress}
    >
      <ImageBackground
        source={props.icon}
        style={styles.ImageIcon}
      />
      <View style={styles.TextContainer}>  
        <Text style={styles.descText}>{props.descText}</Text>
        <Text style={styles.descPrice}>₺{props.descPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 200,
    width: 170,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  ImageIcon: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: 140,
    height: 140,
    margin: 10,
  },
  TextContainer:{
    backgroundColor:"white",
    width: 170,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#f2f2f2",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    alignItems: "center",
    flexDirection: "row",
  },
  ImageTextStyle: {

  },
  descText:{
    color: "black",
    fontSize: 13,
    letterSpacing: .8,
  },
  descPrice:{
    color: "#065649",
    fontSize: 15,
    letterSpacing: .6,
    fontWeight: "bold",
  },
});
