import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import FormTextInput from "@/components/FormTextInput";
import CustomButton from "@/components/CustomButton";

const registerForm = () => {
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
            marginBottom: 24,
          }}
        >
          Please enter a form to continue the registration process
        </Text>

        <View style={{ gap: 12 }}>
          <FormTextInput title="Full Name" />
          <FormTextInput title="Email" />
          <FormTextInput title="Password" />
          <FormTextInput title="Confirm Password" />
        </View>

        <CustomButton
          text="Register"
          onPress={() => navigation.navigate("(auth)/readyToOrder")}
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

export default registerForm;
