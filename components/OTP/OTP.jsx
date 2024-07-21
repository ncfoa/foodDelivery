import { View } from "react-native";
import OTPInput from "@/components/OTP/OTPInput";
import React from "react";

const OTP = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
      }}
    >
      <OTPInput />
      <OTPInput />
      <OTPInput />
      <OTPInput />
      <OTPInput />
      <OTPInput />
    </View>
  );
};

export default OTP;
