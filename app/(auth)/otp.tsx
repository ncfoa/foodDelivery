import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import OTP from "@/components/OTP/OTP";
import CustomButton from "@/components/CustomButton";

const otp = ({ phoneNumber }: any) => {
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
          Verify Your Phone Number
        </Text>

        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
            marginBottom: 16,
          }}
        >
          Enter the 6-digit code we just sent you on your phone number to{" "}
          {phoneNumber}
        </Text>

        <OTP />
        <View
          style={{ position: "absolute", width: "100%", bottom: 20, left: 12 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
              gap: 4,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                color: "#A6A9AE",
                fontSize: 14,
                fontFamily: "Manrope-Medium",
              }}
            >
              Didn't receive code?{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#EC9B3B",
                  fontSize: 14,
                  fontFamily: "Manrope-Medium",
                }}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            text="Next"
            onPress={() => navigation.navigate("(auth)/registerForm")}
            style={{
              backgroundColor: "#EC9B3B",
              color: "#FFFFFF",
              fontFamily: "Manrope-Bold",
              width: "100%",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default otp;
