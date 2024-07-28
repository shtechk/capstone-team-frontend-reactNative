// src/api/index.js
import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "http://172.20.10.2:3000/api", // Replace with your actual backend IP address
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
