import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default function useDeviceWidth() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const devicewidth = Dimensions.get("window").width;
    setWidth(devicewidth);
  }, []);

  return width;
}
