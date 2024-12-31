import { Pressable, Image, Text } from "react-native";

interface SongsTileProp {
  label: string;
  songProfileImageSource: string;
}

export default function SongsTile({
  label,
  songProfileImageSource,
}: SongsTileProp) {
  return (
    <Pressable
      style={{
        width: "auto",
        backgroundColor: "#BCCCDC",
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => alert("Hello there")}
    >
      <Image
        style={{ width: 60, aspectRatio: 1, margin: 10 }}
        source={{
          uri: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fbf705f7b0a2cdf0c76588aae2256616d.1000x1000x1.png",
        }}
      />
      <Text style={{ padding: 10 }}>Billie Jean - Michael Jackson</Text>
    </Pressable>
  );
}
