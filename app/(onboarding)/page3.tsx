import OnBoarding from "@/components/OnBoarding";

import { useNavigation } from "@react-navigation/native";
import React from "react";

const index = () => {
  const navigation = useNavigation();

  return (
    <OnBoarding
      image={require("@/assets/images/3.jpg")}
      title="Guaranteed meals come on time and fast"
      description="Don't worry about food arriving late. Because we have a garantee that your food will be on time"
      onPress={() => navigation.navigate("(auth)/welcome")}
    />
  );
};

export default index;
