import { storage } from "./appwrite.config";

const getSongUrl = async (fileId: string) => {
  try {
    const response = await storage.getFileView("your-bucket-id", fileId);
    return response.href; // This is the URL of the song file
  } catch (error) {
    console.error("Error fetching song URL:", error);
  }
};
