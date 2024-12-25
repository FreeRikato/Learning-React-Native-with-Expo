import styles from "@/styles/global";
import { View } from "react-native";
import colors from "@/assets/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { useState } from "react";

export default function PanDrag() {
  const [circleColor, setCircleColor] = useState("blue");
  const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    return colors[randomNumber];
  };
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  const dragGesture = Gesture.Pan()
    .onStart(() => {
      context.value.x = translationX.value;
      context.value.y = translationY.value;
    })
    .onUpdate((event) => {
      translationX.value = context.value.x + event.translationX;
      translationY.value = context.value.y + event.translationY;
    });

  const dragStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <GestureDetector gesture={dragGesture}>
        <TapGestureHandler onActivated={() => setCircleColor(randomColor)}>
          <Animated.View
            style={[
              styles.box,
              dragStyle,
              { height: 150, borderRadius: 100, backgroundColor: circleColor },
            ]}
          ></Animated.View>
        </TapGestureHandler>
      </GestureDetector>
    </View>
  );
}
