import axios from "axios";

const BASE_URL = "https://localhost:8000";
const instance = axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL };
export default instance;
