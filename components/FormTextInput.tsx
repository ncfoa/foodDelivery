import { TextInput, Text, View } from "react-native";
import React from "react";

const FormTextInput = ({ title }: any) => {
  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontFamily: "Manrope-Bold", color: "#FFFFFF" }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#111826",
          padding: 12,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#344054",
        }}
      >
        <TextInput
          style={{ fontFamily: "Manrope-Medium", color: "#FFFFFFf" }}
          placeholder="Enter your phone number"
          placeholderTextColor="#A6A9AE"
        />
      </View>
    </View>
  );
};

export default FormTextInput;
