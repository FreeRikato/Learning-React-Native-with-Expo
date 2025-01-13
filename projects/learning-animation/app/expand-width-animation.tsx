import { View, Button } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function ExpandWidth() {
  // SharedValue:: React state which is automagically kept in sync between the "JavaScript" and the "native" side of your app
  // SharedValues can be accessed and mutated with .value
  // withSpring and withTiming are animation utility functions
  const width = useSharedValue<number>(100);
  const increaseWidth = () => {
    width.value = withSpring(width.value + 10);
  };
  const decreaseWidth = () => {
    width.value = withSpring(width.value - 10);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/*Animated object wraps React Native built-ins such as View, ScrollView and FlatList*/}
      <Animated.View
        style={{
          // Passing shared values inline to element's style property has one big downside:
          // > Can't access the value stored in a shared value to build more complex animations
          width,
          // width: width*5, is not possible
          height: 100,
          backgroundColor: "blue",
        }}
      />
      <Button title="Increase width" onPress={increaseWidth} />
      <Button title="Decrease width" onPress={decreaseWidth} />
    </View>
  );
}
