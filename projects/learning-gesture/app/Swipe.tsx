import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Swipe() {
  const translateY = useSharedValue(0);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      // Add logic to handle what happens after the swipe ends
      translateY.value = withSpring(0); // Example: spring back to original position
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
  },
});
