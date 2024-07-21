import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Manrope-Light": require("@/assets/fonts/Manrope-Light.ttf"),
    "Manrope-Bold": require("@/assets/fonts/Manrope-Bold.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-ExtraLight": require("../assets/fonts/Manrope-ExtraLight.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/Manrope-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(onboarding)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(onboarding)/page2"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(onboarding)/page3"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/otp" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/readyToOrder"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/registerForm"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
        <Stack.Screen name="(home)/home" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
