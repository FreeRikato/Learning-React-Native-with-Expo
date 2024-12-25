import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Chill Otaku" }} />
        <Stack.Screen name="[photoId]" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
