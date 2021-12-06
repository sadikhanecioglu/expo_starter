import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddTodoItem({ OnPress }) {
  const [newUsername, setNewUsername] = useState("");
  const [newUserage, setNewUserage] = useState("");
  return (
    <View style={{flex:1}}>
      <Text>Name:</Text>
      <TextInput
        placeholder="Please Enter Name"
        onChangeText={(val) => setNewUsername(val)}
      />
      <Text>Age:</Text>
      <TextInput
        placeholder="Please Enter Age"
        keyboardType="numeric"
        onChangeText={(val) => setNewUserage(val)}
      />
      <Button title='Add' onPress={() => OnPress(newUsername,newUserage)} />
    </View>
  );
}
