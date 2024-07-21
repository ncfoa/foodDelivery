import OnBoarding from "@/components/OnBoarding";

import { useNavigation } from "@react-navigation/native";

const index = () => {
  const navigation = useNavigation();
  return (
    <OnBoarding
      image={require("@/assets/images/1.jpg")}
      title="Fast delivery like lightning"
      description="Don't be afraid to starve, because your food delivery is very fast"
      onPress={() => navigation.navigate("(onboarding)/page2")}
    />
  );
};

export default index;
