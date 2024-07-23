import axios from "axios";

// const BASE_URL = "https://localhost:8000";
// const instance = axios.create({
//   baseURL: BASE_URL,
// });

const BASE_URL = "http://172.20.10.5:8000";
const instance = axios.create({
  baseURL: BASE_URL,
});
export { BASE_URL };
export default instance;
