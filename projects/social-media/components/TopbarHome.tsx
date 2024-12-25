import { View, Text } from "react-native";
import styles from "@/styles/global";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";

export default function TopBarHome() {
  return (
    <View style={styles.topTitleContiner}>
      <Text style={styles.instaTitle}>Dumbstagram</Text>
      <View style={styles.notificationGroup}>
        <FontAwesome5
          name="heart"
          size={25}
          color="black"
          style={{ lineHeight: 30 }}
        />
        <Link href={"/chats"}>
          <FontAwesome6
            name="facebook-messenger"
            size={25}
            color="black"
            style={{ lineHeight: 30 }}
          />
        </Link>
      </View>
    </View>
  );
}
