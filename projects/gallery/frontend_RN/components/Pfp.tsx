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
      {!url ? (
        <>
          <Text>No image to render</Text>
        </>
      ) : (
        <Image
          source={{ uri: url }}
          style={[styles.imageContainer, { height: widthStyle }]}
        />
      )}
    </>
  );
}
