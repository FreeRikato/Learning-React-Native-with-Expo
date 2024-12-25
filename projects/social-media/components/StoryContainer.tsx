import { View, ScrollView } from "react-native";
import IndividualStoryContainter from "./IndividualStoryContainer";
export default function StoryContainer() {
  return (
    <View
      style={{
        height: 110,
        borderBottomColor: "#e1e1ea",
        borderBottomWidth: 1,
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
        <IndividualStoryContainter />
      </ScrollView>
    </View>
  );
}
