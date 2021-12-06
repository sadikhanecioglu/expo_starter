import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item,onPress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item.id);
      }}
    >
      <Text style={styles.styleItem}>{item.userName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  styleItem: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#000",
    alignSelf: "stretch",
    textAlign: "center",
    padding: 10,
    margin: 10,
  },
});
