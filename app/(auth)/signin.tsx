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
import ORSeparator from "@/components/ORSeparator";

const SignIn = () => {
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
          Sign in
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
          Welcome back
        </Text>

        <Text
          style={{
            color: "#A6A9AE",
            fontSize: 14,
            fontFamily: "Manrope-Medium",
            marginBottom: 24,
          }}
        >
          Sign in to your account
        </Text>

        <View style={{ gap: 12, marginBottom: 24 }}>
          <FormTextInput title="Email" />
          <FormTextInput title="Password" />
        </View>

        <View style={{ gap: 12 }}>
          <CustomButton
            text="Sign in"
            onPress={() => navigation.navigate("(auth)/readyToOrder")}
            style={{
              backgroundColor: "#EC9B3B",
              color: "#FFFFFF",
              fontFamily: "Manrope-Bold",
              width: "100%",
            }}
          />

          <ORSeparator />

          <CustomButton
            text="Sign in with Google"
            onPress={() => navigation.navigate("(auth)/readyToOrder")}
            style={{
              backgroundColor: "#1D2939",
              borderColor: "#EC9B3B",
              borderWidth: 1,
              color: "#EC9B3B",
              fontFamily: "Manrope-Bold",
              width: "100%",
            }}
          />
          <CustomButton
            text="Sign in with Apple"
            onPress={() => navigation.navigate("(auth)/readyToOrder")}
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
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("(auth)/register")}
          >
            <Text style={{ color: "#EC9B3B" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: "#A6A9AE",
              fontSize: 14,
              fontFamily: "Manrope-Medium",
              textAlign: "center",
            }}
          >
            By signing in, you agree to our app
          </Text>
          <Text
            style={{
              color: "#EC9B3B",
              fontSize: 14,
              fontFamily: "Manrope-Medium",
              textAlign: "center",
            }}
          >
            Terms and Conditions <Text style={{ color: "#A6A9AE" }}> & </Text>{" "}
            Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
