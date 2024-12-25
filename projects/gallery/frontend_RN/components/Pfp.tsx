import React from "react";
import { ActivityIndicator, Image } from "react-native";
import styles from "@/styles/global";

interface PfpProps {
  url: any;
  widthStyle: number;
}

export default function Pfp({ url, widthStyle }: PfpProps) {
  return (
    <>
      {!url ? (
        <ActivityIndicator />
      ) : (
        <Image
          source={{ uri: url }}
          style={[styles.imageContainer, { height: widthStyle }]}
        />
      )}
    </>
  );
}
