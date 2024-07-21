import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import CustomButton from "@/components/CustomButton";

const login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#1D2939" }}>
      <Image
        source={require("@/assets/images/1.jpg")}
        style={{ width: "100%", height: "35%" }}
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
          Si-Food
        </Text>
        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
          }}
        >
          An easy way to order your food
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <CustomButton
          text="Continue With Phone Number"
          onPress={() => navigation.navigate("(auth)/register")}
          style={{
            backgroundColor: "#EC9B3B",
            color: "#FFFFFF",
            fontFamily: "Manrope-Bold",
            width: "100%",
          }}
        />

        <CustomButton
          text="Continue With Google"
          onPress={() => {}}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#EC9B3B",
            fontFamily: "Manrope-Bold",
            width: "100%",
          }}
        />

        <CustomButton
          text="Continue With Apple"
          onPress={() => {}}
          style={{
            backgroundColor: "#111826",
            color: "#FFFFFF",
            fontFamily: "Manrope-Bold",
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
          }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("(auth)/signin")}>
          <Text style={{ color: "#EC9B3B" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 10,
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 12,
            fontFamily: "Manrope-Medium",
          }}
        >
          By Signing up or logging in, I accept the apps{" "}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text
            style={{
              color: "#EC9B3B",
              fontFamily: "Manrope-Medium",
              fontSize: 12,
            }}
          >
            {" "}
            Terms of Service{" "}
          </Text>
          <Text
            style={{
              color: "#A6A9AE",
              fontFamily: "Manrope-Medium",
              fontSize: 12,
            }}
          >
            {" "}
            and{" "}
          </Text>
          <Text
            style={{
              color: "#EC9B3B",
              fontFamily: "Manrope-Medium",
              fontSize: 12,
            }}
          >
            {" "}
            Privacy Policy{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default login;
