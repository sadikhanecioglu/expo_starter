import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Profile</Text>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#efefef",
  },
});