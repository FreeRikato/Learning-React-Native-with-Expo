import { View, Text } from "react-native";

interface ProfileCircleName {
  label: string;
}

export default function ProfileCircleName({ label }: ProfileCircleName) {
  return (
    <View
      style={{
        height: 30,
        aspectRatio: 1,
        borderRadius: "50%",
        backgroundColor: "#7E99A3",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 17,
      }}
    >
      <Text>{label}</Text>
    </View>
  );
}
