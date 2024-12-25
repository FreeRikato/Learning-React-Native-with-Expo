import * as Font from "expo-font";
import { useState, useEffect } from "react";
export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "Lobster-Regular": require("../assets/font/Lobster-Regular.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  return fontsLoaded;
}
