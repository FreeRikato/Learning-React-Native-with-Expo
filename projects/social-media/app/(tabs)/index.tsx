import { Text, View, ScrollView, SafeAreaView } from "react-native";
import styles from "@/styles/global";
import TopBarHome from "@/components/TopbarHome";
import StoryContainer from "@/components/StoryContainer";
import FeedComponent from "@/components/FeedComponent";
import useFonts from "@/hooks/useFonts";

export default function App() {
  const fontsLoaded = useFonts();
  if (!fontsLoaded) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  } else
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TopBarHome />
          <StoryContainer />
          <ScrollView>
            <FeedComponent />
            <FeedComponent />
            <FeedComponent />
            <FeedComponent />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
}
