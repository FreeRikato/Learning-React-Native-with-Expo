import { SafeAreaView, FlatList, View, Image, Text } from "react-native";
import styles from "@/styles/global";
import Pfp from "@/components/Pfp";
import useImages from "@/hooks/useImages";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import { TapGestureHandler } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface imageItem {
  id: number;
  url: string;
}

export default function App() {
  // Hooks
  const images = useImages(); // gets Images from the backend
  const router = useRouter(); // navigate to a single photo
  const width = useDeviceWidth(); // get Device dimenstion => width

  const onSinglePhotoClick = (id: number, url: string) => {
    Image.prefetch(url).then(() => {
      router.push(`/${id}`);
    });
  };

  const renderItem = ({ item }: { item: imageItem }) => {
    return (
      <TapGestureHandler
        onActivated={() => onSinglePhotoClick(item.id, item.url)}
      >
        <View>
          <Pfp url={item.url} widthStyle={width / 3 - 3} />
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
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
