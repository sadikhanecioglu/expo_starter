import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function GreenButton(props) {
  return (
    <TouchableOpacity style={[styles.buttonContenier, {...props.style}]} activeOpacity={0}
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
    
      <Text style={styles.descText}>{props.descText}</Text>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContenier: {
    flex: 1,


    alignItems: 'center',
    justifyContent: 'center',
    height:80,
  },
  ImageIconStyle: {

    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    justifyContent: 'center', alignItems: 'center',
    width:80,
    height:80
  },
  TextContanier:{

  },
  ImageTextStyle: {
    color: '#fff',
    marginTop:20,
  },
  descText:{
    position:'absolute',
    bottom:-40,
    left:0,
    flex:1,
    color: '#99cc66',
    justifyContent: 'flex-end', alignItems: 'flex-end',
    textAlign: 'center',
    flexWrap: 'wrap',
    width:80
  }
});
