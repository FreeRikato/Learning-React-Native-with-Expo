import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="Tap"
          options={{
            headerShown: true,
            presentation: "modal",
          }}
        />
        <Stack.Screen name="Swipe" options={{ presentation: "modal" }} />
        <Stack.Screen name="Drag" options={{ presentation: "modal" }} />
        <Stack.Screen name="Pan-Drag" options={{ presentation: "modal" }} />
        <Stack.Screen name="Pinch-Zoom" options={{ presentation: "modal" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
