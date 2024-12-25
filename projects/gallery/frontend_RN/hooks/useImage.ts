import { useState, useEffect } from "react";
import api from "@/utils/api";

export default function useImage(photoId: number) {
  const [image, setImage] = useState("");
  useEffect(() => {
    const getImage = async () => {
      const response = await api.get(`/api/v1/image/${photoId}`);
      setImage(response.data.imageLink.url);
    };
    getImage();
  }, []);
  return image;
}
