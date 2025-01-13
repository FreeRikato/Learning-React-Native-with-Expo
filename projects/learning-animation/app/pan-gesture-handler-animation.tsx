import { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function PanGestureHandler() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({
    x: 0,
    y: 0,
  });

  const handleGesture = Gesture.Pan()
    .onStart(() => {
      context.value.x = translateX.value;
      context.value.y = translateY.value;
    })
    .onUpdate((event) => {
      const newX = event.translationX;
      const newY = event.translationY;

      translateX.value = newX + context.value.x;
      translateY.value = newY + context.value.y;
    })
    .onEnd((event) => {
      if (
        Math.abs(event.translationX) < 100 &&
        Math.abs(event.translationY) < 100
      ) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 200,
          aspectRatio: 1,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GestureDetector gesture={handleGesture}>
          <Animated.View
            style={[
              {
                height: 100,
                aspectRatio: 1,
                backgroundColor: "blue",
                borderRadius: 25,
              },
              reanimatedStyle,
            ]}
          />
        </GestureDetector>
      </View>
    </View>
  );
}
