// src/api/storage.js
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";
const storeToken = async (token) => {
  try {
    await setItemAsync("token", token);
  } catch (e) {
    console.error("Failed to store the token", e);
  }
};

const getToken = async () => {
  try {
    const token = await getItemAsync("token");
    return token;
  } catch (e) {
    console.error("Failed to fetch the token", e);
    return null;
  }
};

const removeToken = async () => {
  try {
    await deleteItemAsync("token");
  } catch (e) {
    console.error("Failed to remove the token", e);
  }
};

export { storeToken, getToken, removeToken };
