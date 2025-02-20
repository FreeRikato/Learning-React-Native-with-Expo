import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="basic-circle-animation"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="advanced-circle-animation"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="pan-gesture-handler-animation"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="expand-width-animation"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="advanced-circle-pixo-animation"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="haptic-touch"
          options={{ presentation: "modal" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
