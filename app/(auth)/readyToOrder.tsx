import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CustomButton from "@/components/CustomButton";

const readyToOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#BD7C2F" }}>
      {/* <Image
        source={require("@/assets/images/BG.jpg")}
        style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}
        resizeMode="cover"
      /> */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ backgroundColor: "#FFFFFF", padding: 8, borderRadius: 16 }}
        >
          <Image
            source={require("@/assets/images/verify.jpg")}
            resizeMode="contain"
            style={{ width: 60, height: 60 }}
          />
        </View>
        <Text
          style={{ color: "#FFFFFF", fontSize: 24, fontFamily: "Manrope-Bold" }}
        >
          {" "}
          Hello Ahmad Blake 👋{" "}
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontFamily: "Manrope-Medium",
          }}
        >
          {" "}
          Ready to order food?{" "}
        </Text>
      </View>
      <CustomButton
        text="I'm Ready to Order Food"
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          backgroundColor: "#FFFFFF",
          color: "#EC9B3B",
        }}
        onPress={() => {
          navigation.navigate("(home)/home");
        }}
      />
    </View>
  );
};

export default readyToOrder;

const styles = StyleSheet.create({});
