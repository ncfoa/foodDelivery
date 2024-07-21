import { Text, View, Image } from "react-native";
import React from "react";

const Category = ({ title, image }: any) => {
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "#344054",
          borderRadius: 8,
        }}
      >
        <Image
          source={image}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 12,
          fontFamily: "Manrope-Medium",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Category;
