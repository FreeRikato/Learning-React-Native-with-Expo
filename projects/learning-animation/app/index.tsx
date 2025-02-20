import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link href={"/expand-width-animation"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Expand Width Animation</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/basic-circle-animation"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Basic Circle Animation</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/advanced-circle-animation"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Advanced Circle Animation</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/pan-gesture-handler-animation"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Pan Gesture Handler Animation</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/advanced-circle-pixo-animation"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Advanced Circle Pixo Animation</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/haptic-touch"} asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Haptic Touch</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
