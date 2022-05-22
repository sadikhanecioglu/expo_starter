import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function itemButton(props) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {...props.style}]} activeOpacity={0}
    onPress={props.onPress}
    >
      <ImageBackground
        source={props.icon}
        style={styles.ImageIconStyle}
      >
        <View>
          <Text Text style={styles.ImageTextStyle}>
              {props.text}
            </Text>
        </View>
      </ImageBackground>
      <View style={styles.TextContainer}>  
        <Text style={styles.descText}>{props.descText}</Text>
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
  ImageIconStyle: {
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
    borderTopColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageTextStyle: {

  },
  descText:{
    color: "black",
    fontSize: 13,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
