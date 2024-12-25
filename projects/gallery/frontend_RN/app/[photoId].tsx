import styles from "@/styles/global";
import { SafeAreaView, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import api from "@/utils/api";
import Pfp from "@/components/Pfp";
import useDeviceWidth from "@/hooks/useDeviceWidth";

export default function Image() {
  const { photoId } = useLocalSearchParams();
  const deviceWidth = useDeviceWidth();

  const [image, setImage] = useState("");
  useEffect(() => {
    const getImage = async () => {
      const response = await api.get(`/api/v1/image/${photoId}`);
      console.log(response.data);
      setImage(response.data.imageLink.url);
    };
    getImage();
  }, []);

  return (
    <SafeAreaView style={styles.photoPageContainer}>
      <Pfp url={image} widthStyle={deviceWidth} />
    </SafeAreaView>
  );
}
