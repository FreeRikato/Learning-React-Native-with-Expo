import { SafeAreaView, View } from "react-native";
import {
  TapGestureHandler,
  LongPressGestureHandler,
} from "react-native-gesture-handler";
import { useRef } from "react";
import styles from "@/styles/global";

export default function Tap() {
  const onSingleTap = () => {
    alert("Single tapped the box");
  };
  const onDoubleTap = () => {
    alert("Double tapped the box");
  };
  const onLongPress = () => {
    alert("Long pressed the box");
  };

  const doubleTapRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <LongPressGestureHandler onActivated={onLongPress} minDurationMs={500}>
        <TapGestureHandler
          numberOfTaps={2}
          ref={doubleTapRef}
          onActivated={onDoubleTap}
          maxDurationMs={10000}
        >
          <TapGestureHandler
            numberOfTaps={1}
            waitFor={doubleTapRef}
            onActivated={onSingleTap}
          >
            <View style={styles.box}></View>
          </TapGestureHandler>
        </TapGestureHandler>
      </LongPressGestureHandler>
    </SafeAreaView>
  );
}
