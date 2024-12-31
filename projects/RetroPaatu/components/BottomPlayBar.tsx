import { useEffect, useState } from "react";
import { Pressable, View, Text, Image } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { getSongUrl } from "@/utils/appwrite.config";
import { Audio } from "expo-av";
interface BottomPlayBarProps {
  label: string;
  songProfileImageSource: string;
}

export default function BottomPlayBar({
  label,
  songProfileImageSource,
}: BottomPlayBarProps) {
  const [play, setPlay] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);
  const playSong = async () => {
    try {
      const fileId = "676e8f14003c4e2bb249"; // Replace with your file ID
      const songUrl = await getSongUrl(fileId);
      console.log("Song URL:", songUrl); // Log the URL

      if (songUrl) {
        const { sound } = await Audio.Sound.createAsync({ uri: songUrl });
        setSound(sound);
        await sound.playAsync();
        
        alert("Song is playing");
      } else {
        alert("Failed to get song URL");
      }
    } catch (error) {
      console.error("Error playing song:", error);
      alert("Error playing song");
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A59D84",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 40, aspectRatio: 1, marginRight: 10 }}
          source={{
            uri: songProfileImageSource,
          }}
        />
        <Text>{label}</Text>
      </View>
      <Pressable onPress={() => playSong()}>
        <FontAwesome5 name="play" size={24} color="black" />
      </Pressable>
    </View>
  );
}
