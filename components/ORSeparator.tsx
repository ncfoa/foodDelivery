import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ORSeparator = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, height: 1, backgroundColor: "#A6A9AE" }} />
      <Text style={{ paddingHorizontal: 10, color: "#A6A9AE" }}>or</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: "#A6A9AE" }} />
    </View>
  );
};

export default ORSeparator;
