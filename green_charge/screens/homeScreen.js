import React, { useState, useEffect } from "react";
import * as Battery from "expo-battery";
import { Image, StyleSheet, Text, View, ImageBackground} from "react-native";
import LeftSlipButton from "../../components/LeftSlipButton";
import RightSlipButton from "../../components/RightSlipButton";
import Announcement from "../../components/Announcement";
import BalanceLayout from "../../components/BalanceLayout";
import * as Progress from 'react-native-progress';

const GameIcon = require("../../assets/theme/cg/GameButton.png");
const VideoIcon = require("../../assets/theme/cg/VideoButton.png");
const AnnounceBack = require("../../assets/theme/cg/AnnounceBack.png");
const AnnounceFwd = require("../../assets/theme/cg/AnnounceFwd.png");

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

  console.log(Math.round(batteryLevel*100));

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style= {styles.logo} source={require("../../assets/theme/cg/LogoCG.png")}></Image>
        <BalanceLayout
          style={{}}
        />
      </View>
      <View style={styles.bodyContainer}>
        <LeftSlipButton
          slipText="İzle Kazan"
          icon={VideoIcon}
          style={{}}
          bgColor="#84d651"
        />
        <ImageBackground style={styles.capsule} source={require("../../assets/theme/cg/Capsule.png")}>
          {
            batteryState != null && batteryState == 1 && 
            <View style={styles.progressContainer}>
              <Progress.Circle size={100} color="#53a2a3" height={"30%"} borderRadius={5} progress={batteryLevel} indeterminate={false} >                    
                <Text style={styles.progressText}>{ Math.round(batteryLevel*100)}%</Text>
              </Progress.Circle>
            </View>
          }
        </ImageBackground>
        <RightSlipButton
          slipText="Oyna Kazan"
          icon={GameIcon}
          style={{}}
          bgColor="#0b5c50"
        />
      </View>
      <View style={styles.footerContainer}>
        <Announcement
          backIcon={AnnounceBack}
          fwdIcon={AnnounceFwd}
          style={{}}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    justifyContent: "space-around",
    alignItems:"center",
    flexDirection: "row",
    width: "100%",
    height: "18%",
  },
  logo: {
    width: "37%",
    resizeMode: "contain",
  },
  bodyContainer: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  capsule: {
    width: 212,
    height: "100%",
    resizeMode: "contain",
  },
  progressContainer:{
    flex: 1,
    justifyContent:"flex-start",
    alignItems: "center",
    marginTop: "20%",
  },
  progressText:{
    color: "#effafb",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    position: "absolute",
    top: "24%",
  },
  footerContainer: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
  }
});
