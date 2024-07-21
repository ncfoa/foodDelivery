import { View, Text, Image, StatusBar } from "react-native";
import React from "react";

const DiscountBadge = ({ text, style }: { text: string; style?: any }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FF5C26",
          padding: 4,
          borderRadius: 4,
          alignItems: "center",
          ...style,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 10,
            fontFamily: "Manrope-Medium",
          }}
        >
          {text}
        </Text>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default DiscountBadge;
