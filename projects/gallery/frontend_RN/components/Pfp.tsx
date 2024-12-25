import React from "react";
import { Image, Text } from "react-native";
import styles from "@/styles/global";

interface PfpProps {
  url: any;
  widthStyle: number;
}

export default function Pfp({ url, widthStyle }: PfpProps) {
  return (
    <>
      <Image
        source={{ uri: url }}
        style={[styles.imageContainer, { height: widthStyle }]}
      />
    </>
  );
}
