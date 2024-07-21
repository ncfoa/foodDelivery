import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        borderRadius: 10,
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{ color: style.color, fontFamily: "Manrope-Bold", fontSize: 14 }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
