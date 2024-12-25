import styles from "@/styles/global";
import { SafeAreaView, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Image() {
  const loc = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.galleryContainer}>
      <Text>{JSON.stringify(loc)}</Text>
    </SafeAreaView>
  );
}
