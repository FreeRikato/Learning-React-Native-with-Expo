import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
      <View style={styles.childContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap-reverse",
  },
  childContainer: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 3.5,
  },
});

export default App;
