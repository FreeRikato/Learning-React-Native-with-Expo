import { View } from "react-native";
import ProfileCircleName from "./ProfileCircleName";
import HomePageTopTap from "./HomePageTopTab";

export default function TopBarHomePage() {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", paddingBottom: 15 }}
    >
      <ProfileCircleName label="Ar" />

      <View
        style={{
          flexDirection: "row",
          gap: 17,
        }}
      >
        <HomePageTopTap label="All" borderRadius="40%" />

        <HomePageTopTap label="Music" borderRadius="25%" />

        <HomePageTopTap label="Podcasts" borderRadius="15%" />

        <HomePageTopTap label="Wrapped" borderRadius="17%" />
      </View>
    </View>
  );
}
