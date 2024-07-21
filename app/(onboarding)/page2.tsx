import OnBoarding from "@/components/OnBoarding";

import { useNavigation } from "@react-navigation/native";
import React from "react";

const index = () => {
  const navigation = useNavigation();
  return (
    <OnBoarding
      image={require("@/assets/images/2.jpg")}
      title="An easy way to track your food delivery courier"
      description="Easy to track the whereabouts of your food courier"
      onPress={() => navigation.navigate("(onboarding)/page3")}
    />
  );
};

export default index;
