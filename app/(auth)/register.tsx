import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import FormTextInput from "@/components/FormTextInput";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import CustomButton from "@/components/CustomButton";

const Register = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1D2939" }}>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderColor: "#344054",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: "absolute", left: 12 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("@/assets/images/Icon Left.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontFamily: "Manrope-Medium",
          }}
        >
          Register
        </Text>
      </View>
      <View style={{ flex: 1, padding: 12 }}>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 24,
            fontFamily: "Manrope-Bold",
            marginBottom: 16,
          }}
        >
          Register
        </Text>

        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
            marginBottom: 16,
          }}
        >
          Please enter your number to continue your registration
        </Text>

        <FormTextInput title="Phone Number" />
        <CustomButton
          text="Next"
          onPress={() => navigation.navigate("(auth)/otp")}
          style={{
            backgroundColor: "#EC9B3B",
            color: "#FFFFFF",
            fontFamily: "Manrope-Bold",
            width: "100%",
            position: "absolute",
            bottom: 20,
            left: 12,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
