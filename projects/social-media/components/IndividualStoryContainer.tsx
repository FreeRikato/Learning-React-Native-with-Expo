import { View, Image, Text } from "react-native";
import styles from "@/styles/global";

export default function IndividualStoryContainter() {
  return (
    <View style={styles.individualStoryContainer}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/3b/9d/50/3b9d50a32ed833d9cdc73978e98c8fc2.jpg",
        }}
        style={styles.story}
      />
      <Text style={{ fontSize: 14, fontWeight: 400 }}>LUFFY</Text>
    </View>
  );
}
