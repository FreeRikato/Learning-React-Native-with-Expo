import { View } from "react-native";
import styles from "@/styles/global";
import TopBarHomePage from "@/components/TopbarHomePage";
import SongsTile from "@/components/SongsTile";
import BottomPlayBar from "@/components/BottomPlayBar";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TopBarHomePage />
        <SongsTile
          label="Billie Jean - Michael Jackson"
          songProfileImageSource="https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fbf705f7b0a2cdf0c76588aae2256616d.1000x1000x1.png"
        />
      </View>
      <View>
        <BottomPlayBar
          label="Billie Jean - Michael Jackson"
          songProfileImageSource="https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fbf705f7b0a2cdf0c76588aae2256616d.1000x1000x1.png"
        />
      </View>
    </View>
  );
}
