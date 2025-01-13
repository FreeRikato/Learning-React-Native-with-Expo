import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function BasicCircle() {
  const progress = useSharedValue(0);
  const SIZE = 200;

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      height: progress.value * 1.5 * SIZE,
      borderRadius: (SIZE * 1.5 * progress.value) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            width: SIZE,
            aspectRatio: 1,
            backgroundColor: "blue",
            borderRadius: SIZE / 2,
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}
