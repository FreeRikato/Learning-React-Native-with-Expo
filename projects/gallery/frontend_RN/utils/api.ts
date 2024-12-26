import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_BASE_URL}:3000`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
