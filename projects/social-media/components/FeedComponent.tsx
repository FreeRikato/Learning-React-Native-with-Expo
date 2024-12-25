import { View, Text, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import styles from "@/styles/global";

export default function FeedComponent() {
  return (
    <View>
      <View style={styles.feedContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/3b/9d/50/3b9d50a32ed833d9cdc73978e98c8fc2.jpg",
              }}
              style={{ height: 35, width: 35, borderRadius: "50%" }}
            />
            <Text>Luffy</Text>
          </View>
          <SimpleLineIcons name="options" size={18} color="black" />
        </View>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/3b/9d/50/3b9d50a32ed833d9cdc73978e98c8fc2.jpg",
          }}
          style={{ height: 275, width: 500 }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <FontAwesome5
              name="heart"
              size={30}
              color="black"
              style={{ lineHeight: 30 }}
            />
            <Text>12.2k</Text>
            <FontAwesome
              name="comment-o"
              size={30}
              color="black"
              style={{ lineHeight: 30 }}
            />
            <Text>5</Text>
            <Feather
              name="send"
              size={24}
              color="black"
              style={{ lineHeight: 30 }}
            />
          </View>
          <Feather
            name="bookmark"
            size={30}
            color="black"
            style={{ lineHeight: 30 }}
          />
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text>
            <Text style={{ fontWeight: "700" }}>Luffy </Text>
            Minami no shimawaaa atakai ♪ Paina-puru-puru, Atama boka boka, Aho
            baakaaaaaaa! ♪ ~~~~~~~~~~~~~~~~~~ Ni ban! Kita no shima wa samuiii ♪
            Hyakkoi-koi-koi, Atama buru buru, Aho baakaaaaaaa! ♪
            ~~~~~~~~~~~~~~~~~~
          </Text>
        </View>
      </View>
    </View>
  );
}
