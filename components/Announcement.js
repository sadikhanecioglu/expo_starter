import React from 'react';
import { StyleSheet, Image, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function Announcement(props) {
  return (
    <View style={[styles.announceContainer, {...props.style}]}>
      <TouchableOpacity  activeOpacity={0} onPress={props.onPress}>  
        <Image source={props.backIcon} style={styles.backIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0} onPress={props.onPress}>
        <Text style={styles.announceText}>{props.announceText}</Text>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0} onPress={props.onPress}>  
        <Image source={props.fwdIcon} style={styles.fwdIcon}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  announceContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  announceText:{
    fontSize: 12,
    color: "#085d4a",
    width: 230,
    height: 34,
    borderWidth: 2,
    borderColor: "#efb41c",
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 20,
    margin: 10,
  },
  fwdIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});
