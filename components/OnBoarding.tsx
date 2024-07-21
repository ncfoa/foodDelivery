import { View, Text, Image } from "react-native";
import CustomButton from "@/components/CustomButton";
import React from "react";

const OnBoarding = ({ image, title, description, onPress }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1D2939" }}>
      <Image
        source={image}
        style={{ width: "100%", height: "60%" }}
        resizeMode="cover"
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: "#CBCDD0",
            fontSize: 24,
            fontFamily: "Manrope-Bold",
            paddingBottom: 20,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
          }}
        >
          {description}
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 16,
          position: "absolute",
          bottom: 20,
        }}
      >
        <CustomButton
          text="Skip"
          onPress={onPress}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#EC9B3B",
            fontFamily: "Manrope-Bold",
            width: "50%",
          }}
        />
        <CustomButton
          text="Next"
          onPress={onPress}
          style={{
            backgroundColor: "#EC9B3B",
            color: "#FFFFFF",
            fontFamily: "Manrope-Bold",
            width: "50%",
          }}
        />
      </View>
    </View>
  );
};

export default OnBoarding;
