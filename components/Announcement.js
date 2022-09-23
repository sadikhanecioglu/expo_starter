import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground, TouchableOpacity,View, Text } from 'react-native';

export default function Announcement(props) {
  
  const announceFirst = "Arkadaşlarını Davet Et OXY Kazan!";
  const announceSecond = 'Mağazayı ziyaret etmeyi unutma!';
  const [announceText, setAnnounceText] = useState(true);

  let changeAnnounce = () => setAnnounceText(previousState => !previousState);
  let announcementText = announceText ? announceFirst : announceSecond
  
  return (
    <View style={[styles.announceContainer, {...props.style}]}>
      <TouchableOpacity  activeOpacity={0} onPress={changeAnnounce}>  
        <Image source={props.backIcon} style={styles.backIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0} onPress={props.onPress}>
        <Text style={styles.announceText}>{announcementText}</Text>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0} onPress={changeAnnounce}>  
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
