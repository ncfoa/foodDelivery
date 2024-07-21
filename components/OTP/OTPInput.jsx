import { TextInput, View } from "react-native";
import React from "react";

const OTPInput = () => {
  const [focused, setFocused] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (e) => {
    console.log(e.nativeEvent.text);
    setOtp(e.nativeEvent.text);
  };

  let borderColor = focused ? "#EC9B3B" : "#344054";
  if (otp.length === 1) {
    borderColor = "#EC9B3B";
  }
  return (
    <View style={{ gap: 10 }}>
      <View
        style={{
          backgroundColor: "#111826",
          padding: 12,
          borderRadius: 14,
          borderWidth: 1,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderColor: borderColor, // Add this line
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <TextInput
          style={{
            fontFamily: "Manrope-Medium",
            color: "#FFFFFF",
            fontSize: 24,
            textAlign: "center",
            width: 20,
            paddingBottom: 5,
            borderBottomWidth: focused ? 1 : 0,
            borderColor: focused ? "#EC9B3B" : "#344054",
          }}
          placeholder=""
          keyboardType="number"
          maxLength={1}
        />
      </View>
    </View>
  );
};

export default OTPInput;
