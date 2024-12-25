import { useState, useEffect } from "react";
import api from "@/utils/api";

export default function useImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await api.get("/api/v1/images");
        console.log(JSON.stringify(response.data.imageData));

        setImages(response.data.imageData);
      } catch (e: any) {
        console.warn(JSON.stringify(e));
      }
    };
    getImages();
  }, []);

  return images;
}
