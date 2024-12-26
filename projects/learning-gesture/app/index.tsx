import { Text, TouchableOpacity, View } from "react-native";
import styles from "@/styles/global";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", gap: 10 }}>
        <Link href={"/Tap"} asChild>
          <TouchableOpacity>
            <Text style={styles.routeText}>Tap component</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/Pan-Drag"} asChild>
          <TouchableOpacity>
            <Text style={styles.routeText}>Pan/Drag component</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/Pinch-Zoom"} asChild>
          <TouchableOpacity>
            <Text style={styles.routeText}>Pinch/Zoom component</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/Swipe"} asChild>
          <TouchableOpacity>
            <Text style={styles.routeText}>Swipe component</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
