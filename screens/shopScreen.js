import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
} from "react-native";
import GlobalStyles from "../shared/globalStyle";
import Header from "../ProductComponents/productAppHeader";
import { abs, color } from "react-native-reanimated";
export default function shopScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.contanier, GlobalStyles.droidSafeArea]}>
      <View style={styles.headerContanier}>
        <Text style={styles.contentText}>Profile</Text>
      </View>
      <View style={styles.profileImageWrap}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../assets/profileImage.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={styles.profileName}>ADREW SONAS</Text>
        <Text style={styles.profileSubName}>andreq.sonas@gmail.com</Text>
      </View>
      <View style={{ zIndex: 0, flex: 1, marginTop: 20 }}>
        <SectionList
          sections={[
            {
              title: "Checkout",
              data: ["Questions", "Subscription", "Billing"],
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity>
   
              <Text style={styles.sectionItem}>{item}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  headerContanier: {
    zIndex: 2,
    height: 174,
    backgroundColor: "#E8E8E8",
  },
  headerContent: {
    backgroundColor: "#fff",
    height: 691,
  },
  contentText: {
    color: "#000",
    paddingLeft: 20,
    paddingTop: 55,
    fontSize: 20,
  },
  profileImageWrap: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    marginTop: -40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  profileSubName: {
    fontSize: 16,
    color: "#222831",
    marginTop: 10,
  },
  sectionHeader: {
    height: 36,
    backgroundColor: "#EEEEF3",
    color: "#222831",
    paddingLeft: 10,
    textAlignVertical: "center",
  },
  sectionItem: {
    height: 48,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: 16,
    alignContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#707070",
    marginLeft: 20,
  },
});