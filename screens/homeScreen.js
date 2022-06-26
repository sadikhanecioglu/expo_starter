import React, { useState, useEffect } from "react";
import * as Battery from "expo-battery";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GreenButton from "../components/GreenButton";
import * as Progress from 'react-native-progress';


const MarketIcon = require("../assets/theme/cg/Market.png");
const OyunIcon = require("../assets/theme/cg/Oyun.png");
const VideoIcon = require("../assets/theme/cg/Video.png");

export default function HomeScreen({ navigation }) {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryState, setBatteryState] = useState(null);

  useEffect(() => {
   
    async function getInformation(){
        const state = await Battery.getBatteryStateAsync();
        setBatteryState(state);
        const level = await Battery.getBatteryLevelAsync();
        setBatteryLevel(level);
    } 

    const bs = Battery.addBatteryStateListener(({ batteryState }) => {
      console.log("Battery State",batteryState);
      setBatteryState(batteryState);
    });
   
    const bl = Battery.addBatteryLevelListener(({ batteryLevel }) => {
        //setBatteryLevel
      console.log("Battery Level", batteryLevel);
      setBatteryLevel(batteryLevel);

    });
    var intervalId = setInterval(
        () => { getInformation();}
   , 1000);

    getInformation();

    return () => {
      bs.remove();
      bl.remove();
      clearInterval(intervalId);
    };


  }, []);



  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageCapsul}
        source={require("../assets/theme/cg/Kapssul.png")}
      >
      {
          batteryState != null && batteryState == 2 && 
        <View style={styles.progressContanier}>
        <Progress.Circle size={100} color="#006666" height={200} borderRadius={5} progress={batteryLevel} indeterminate={false} >
            <Text style={styles.progressText}>%{ Math.round(batteryLevel*100)}</Text>
        </Progress.Circle>
        </View>
      }
      </ImageBackground>

      <View style={styles.buttonView}>

        <GreenButton
          text="market"
          descText="Ürün al OXY kazan!"
          icon={MarketIcon}
          style={{ top: -60 }}
        />
        <GreenButton
          text="oyun"
          descText="Oyun oyna OXY kazan!"
          icon={OyunIcon}
          style={{ top: -25 }}
        />
        <GreenButton
          text="video"
          descText="Video izle OXY kazan!"
          icon={VideoIcon}
          style={{ top: -60 }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  headerContanier: {
    flex: 1,
    backgroundColor: "orange",
    padding: 18,
  },
  headerText: {
    marginTop: 10,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageCapsul: {
    width: 162,
    height: 450,
    justifyContent: "space-around",
    resizeMode: "contain",
    marginTop: 50,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 45,
  },
  progressContanier:{
      flex:1,
      justifyContent:"center",
      alignItems: "center",
      marginBottom:20
  },
  progressText:{
     position:"absolute",
     top:40,
     left:35
  }
});
