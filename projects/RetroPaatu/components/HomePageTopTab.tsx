import { View, Text } from "react-native";

interface HomePageTopTapProps {
  label: string;
  borderRadius: string;
}

export default function HomePageTopTap({
  label,
  borderRadius,
}: HomePageTopTapProps) {
  return (
    <View
      style={{
        backgroundColor: "#A5BFCC",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: borderRadius,
      }}
    >
      <Text>{label}</Text>
    </View>
  );
}
