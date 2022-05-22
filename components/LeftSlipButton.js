import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function LeftSlipButton(props) {
  return (
    <View style={[styles.buttonContainer, {...props.style}]}>
        <View style={styles.slipContainer} backgroundColor={props.bgColor}>
            <View style={styles.slipBackground}>     
              <TouchableOpacity  activeOpacity={0} onPress={props.onPress}>  
                <ImageBackground source={props.icon} style={styles.iconImage}></ImageBackground>
              </TouchableOpacity>  
            </View>
        </View>
      <Text style={styles.slipText}>{props.slipText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "20%",
    height: "100%",
  },
  slipContainer: {
    width: 80,
    height: 75,
    alignItems: "flex-end",
    justifyContent: "center",
    borderTopRightRadius: 100,
    borderBottomEndRadius: 100,
  },
  slipBackground: {
    marginRight: 5,
    backgroundColor: "white",
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  iconImage: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  slipText:{
    marginTop: "10%",
    fontSize: 11,
    color: "#aaaaab",
    width: "80%",
  }
});
