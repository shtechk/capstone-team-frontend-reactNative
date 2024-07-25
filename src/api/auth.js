// src/api/auth.js
import instance from "./index";
import { storeToken } from "./storage";

// Login function
const login = async (userInfo) => {
  const { data } = await instance.post("/users/login", userInfo);
  if (data.token) {
    console.log(data.token)
    await storeToken(data.token);
  }
  return data;
};

// Register function
const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) {
      if (userInfo[key] !== null) {
        formData.append(key, userInfo[key]);
      }
    }

    const { data } = await instance.post("/users/register", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (data.token) {
      await storeToken(data.token);
    }

    return data;
  } catch (error) {
    console.error(
      "Registration error:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

// Verify Email function
const verifyEmail = async ({ email, verification_code }) => {
  const { data } = await instance.post("/users/verify-email", {
    email,
    verification_code,
  });
  return data;
};

export { register, login, verifyEmail };
