import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topTitleContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  instaTitle: {
    justifyContent: "flex-start",
    fontSize: 27,
    fontFamily: "Lobster-Regular",
    fontWeight: "semibold",
    marginLeft: 10,
  },
  notificationGroup: {
    flexDirection: "row",
    gap: 15,
    marginRight: 10,
  },
  individualStoryContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  story: {
    width: 85,
    height: 85,
    borderRadius: "50%",
    borderColor: "black", // Transparent for background handling
    borderWidth: 4,
    overflow: "hidden",
    marginRight: 10,
  },
  feedContainer: {},
});

export default styles;
