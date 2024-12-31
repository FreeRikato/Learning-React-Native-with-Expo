import { Client, Storage } from "react-native-appwrite";

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("676d96f4000e02941caf") // Your project ID
  .setPlatform("com.company.RetroPaatu"); // Your app's package name or bundle ID

// Initialize the Storage instance with the client
const storage = new Storage(client);

const getSongUrl = async (fileId: string): Promise<string | null> => {
  try {
    const response = await storage.getFileView("676d970e0037f020272e", fileId); // Replace with your bucket ID
    return response.href; // This is the URL of the song file
  } catch (error) {
    console.error("Error fetching song URL:", error);
    return null;
  }
};

export { getSongUrl };
