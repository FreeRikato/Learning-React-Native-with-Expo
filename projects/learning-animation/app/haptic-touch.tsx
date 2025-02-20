import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";

const HapticTouch = () => {
  const handlePress = () => {
    // Trigger haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);

    // Your other logic here
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default HapticTouch;
