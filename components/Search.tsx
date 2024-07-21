import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: "#111826",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 12,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#344054",
        width: "100%",
      }}
    >
      <Image
        source={require("@/assets/images/search.png")}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
      <TextInput
        style={{ fontFamily: "Manrope-Medium", color: "#FFFFFFf" }}
        placeholder="What would you like to eat?"
        placeholderTextColor="#A6A9AE"
      />
    </View>
  );
};

export default Search;
