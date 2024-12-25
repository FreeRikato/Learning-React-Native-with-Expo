import React, { useState, useRef } from "react";
import { View, StyleSheet, PanResponder, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const App = () => {
  const [boxPosition, setBoxPosition] = useState(height - 100); // Start at the bottom
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Update the box position based on the vertical gesture movement
        setBoxPosition(
          Math.max(0, Math.min(height - 100, boxPosition + gestureState.dy)),
        );
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View
        style={[styles.box, { top: boxPosition }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-start", // To allow movement to the top
  },
  box: {
    position: "absolute",
    left: "50%",
    marginLeft: -50,
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
});

export default App;
