import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const CIRCLE_RADIUS = 40;
const BALL_RADIUS = 30;

const circles = [
  { x: width / 4 - CIRCLE_RADIUS, y: height / 4 - CIRCLE_RADIUS },
  { x: (3 * width) / 4 - CIRCLE_RADIUS, y: (3 * height) / 4 - CIRCLE_RADIUS },
];

export default function AdvancedCirclePixo() {
  // Create a single position shared value object for x and y
  const position = useSharedValue({
    x: width / 2 - BALL_RADIUS,
    y: height / 2 - BALL_RADIUS,
  });

  // To keep track of the original position on gesture start
  const context = useSharedValue({ x: 0, y: 0 });

  // You seem to have a mechanism to track which circle the ball is in
  // if needed; keeping it for now.
  const ball = useSharedValue(0);

  const PanGesture = Gesture.Pan()
    .onStart(() => {
      context.value = { ...position.value };
    })
    .onUpdate((event) => {
      position.value = {
        x: context.value.x + event.translationX,
        y: context.value.y + event.translationY,
      };
    })
    .onEnd(() => {
      let minDistance = Infinity;
      let distance;
      let nearestCircleCoordinates = null;
      let nearestCircle;
      const snapTriggerRadius = CIRCLE_RADIUS * 2.5;

      // Get the center of the ball for distance calculation
      const ballCenterX = position.value.x;
      const ballCenterY = position.value.y;

      for (let i = 0; i < circles.length; i++) {
        // Adjust circle center (if needed, here using same adjustment as before)
        const circleCenterX = circles[i].x + CIRCLE_RADIUS / 4;
        const circleCenterY = circles[i].y + CIRCLE_RADIUS / 4;
        distance = Math.hypot(ballCenterX - circleCenterX, ballCenterY - circleCenterY);

        console.log(`Distance of the ball to circle ${i}: ${distance}`);
        console.log(`Position: {${circles[i].x}, ${circles[i].y}}`);

        if (distance < minDistance) {
          minDistance = distance;
          nearestCircle = i;
          nearestCircleCoordinates = { x: circleCenterX, y: circleCenterY };
        }
      }
      console.log(`Distance of the ball to nearest circle: ${minDistance}`);

      if (minDistance > snapTriggerRadius) {
        // Snap back to center
        position.value = withSpring({
          x: width / 2 - BALL_RADIUS,
          y: height / 2 - BALL_RADIUS,
        });
        console.log("Ball has to come back to source");
      } else if (nearestCircleCoordinates && minDistance < snapTriggerRadius) {
        if (ball.value === nearestCircle) {
          // Animate to nearest circle
          position.value = withSpring({
            x: nearestCircleCoordinates.x,
            y: nearestCircleCoordinates.y,
          });
          console.log("Ball has to go to nearest circle");
        } else {
          // Animate sequence: first go to nearest circle, then go back to center
          position.value = withSequence(
            withSpring({
              x: nearestCircleCoordinates.x,
              y: nearestCircleCoordinates.y,
            }),
            withSpring({
              x: width / 2 - BALL_RADIUS,
              y: height / 2 - BALL_RADIUS,
            })
          );
        }
      }
    });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: position.value.x },
        { translateY: position.value.y },
      ],
    };
  });

  return (
    <View style={{ position: "relative", flex: 1 }}>
      {circles.map((circle, index) => (
        <View
          key={index}
          style={{
            height: CIRCLE_RADIUS * 2,
            width: CIRCLE_RADIUS * 2,
            borderRadius: CIRCLE_RADIUS,
            borderWidth: 2,
            borderColor: "blue",
            position: "absolute",
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
      <GestureDetector gesture={PanGesture}>
        <Animated.View
          style={[
            {
              height: BALL_RADIUS * 2,
              width: BALL_RADIUS * 2,
              borderRadius: BALL_RADIUS,
              backgroundColor: "red",
              position: "absolute",
            },
            reanimatedStyle,
          ]}
        />
      </GestureDetector>
    </View>
  );
}
