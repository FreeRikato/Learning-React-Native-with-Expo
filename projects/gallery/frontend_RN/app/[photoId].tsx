import styles from "@/styles/global";
import { SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Pfp from "@/components/Pfp";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import useImage from "@/hooks/useImage";

export default function Image() {
  const { photoId } = useLocalSearchParams();
  const image = useImage(Number(photoId));
  const deviceWidth = useDeviceWidth();

  return (
    <SafeAreaView style={styles.photoPageContainer}>
      <Pfp url={image} widthStyle={deviceWidth} />
    </SafeAreaView>
  );
}
