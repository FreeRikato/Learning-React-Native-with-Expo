import React from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import styles from "@/styles/global";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const PinchZoom = () => {
  // Shared values for scaling
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1); // To accumulate scale if needed

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      // If you want to accumulate scale over multiple gestures:
      scale.value = savedScale.value * event.scale;

      // If you want to reset scale after each gesture, use:
      // scale.value = event.scale;
    })
    .onEnd(() => {
      // If accumulating scale:
      savedScale.value = scale.value;

      // If resetting scale after each gesture:
      // scale.value = withTiming(1, { duration: 200 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={animatedStyle}>
          <View style={styles.box} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default PinchZoom;
