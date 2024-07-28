// src/api/index.js
import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "http://192.168.0.101:8000", // Replace with your actual backend IP address
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
