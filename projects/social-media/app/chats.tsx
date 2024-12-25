import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "@/styles/global";
export default function Chats() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTitleContiner}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => router.back()}
          />
          <Text style={[styles.instaTitle, { fontFamily: "Roboto" }]}>
            Luffy{" "}
          </Text>
          <AntDesign name="down" size={15} color="black" />
        </View>
        <FontAwesome6
          name="edit"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Ask Meta AI or Search"
            placeholderTextColor={"black"}
            style={{
              backgroundColor: "#d6d6d6",
              width: 370,
              height: 40,
              borderRadius: "5%",
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17 }}>Messages</Text>
          <Text style={{ fontSize: 15, color: "#7e7e7e" }}>Requests</Text>
        </View>
        <View
          style={{ alignItems: "center", paddingHorizontal: 10, marginTop: 10 }}
        >
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              height: 70,
              width: 350,
              backgroundColor: "black",
              borderRadius: 10,
              margin: 5,
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const chatStyles = StyleSheet.create({});
