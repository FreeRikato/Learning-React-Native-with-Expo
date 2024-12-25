import { SafeAreaView, FlatList, View, Text } from "react-native";
import styles from "@/styles/global";
import Pfp from "@/components/Pfp";
import useImages from "@/hooks/useImages";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import { TapGestureHandler } from "react-native-gesture-handler";

export default function App() {
  const images = useImages();
  const width = useDeviceWidth();

  const onSinglePhotoClick = () => {
    alert("Clicked a photo");
  };

  const renderItem = ({ item }: { item: string }) => {
    return (
      <TapGestureHandler onActivated={onSinglePhotoClick}>
        <View>
          <Pfp url={item} widthStyle={width} />
        </View>
      </TapGestureHandler>
    );
  };

  return (
    <SafeAreaView style={styles.galleryContainer}>
      <FlatList
        style={styles.imageGroup}
        data={images}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
