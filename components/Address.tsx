import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Address = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Image source={require("@/assets/images/location.png")} />
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Manrope-Bold",
          fontSize: 16,
        }}
      >
        JI. Tirto Taruno No.12
      </Text>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
