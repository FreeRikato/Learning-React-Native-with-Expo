import { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

export default function AdvancedCircleAnimation() {
  const SIZE = 100;
  const progress = useSharedValue(0.5);
  const border = useSharedValue(0.5);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * Math.PI * 2}rad` }],
      height: SIZE * 2 * progress.value,
      borderRadius: border.value * 100,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), -1, true);
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
            height: SIZE,
            aspectRatio: 1,
            backgroundColor: "red",
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}
