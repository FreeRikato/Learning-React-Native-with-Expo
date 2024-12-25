import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageGroup: {},
  imageContainer: {
    margin: 1,
    height: 128, // Explicitly set the height
    aspectRatio: 1,
  },
});

export default styles;
