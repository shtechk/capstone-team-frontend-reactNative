// src/api/index.js
import axios from "axios";
import { getToken } from "./storage";

const BASE_URL = "http:/192.168.2.66:3000";
const instance = axios.create({
  baseURL: "http://192.168.2.66:3000", // Replace with your actual backend IP address
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  console.log("first", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("headers", config.headers.Authorization);
  }
  return config;
});
export { BASE_URL };
export default instance;
