// src/api/auth.js
import instance from "./index";
import { storeToken } from "./storage";

// Login function
const login = async (userInfo) => {
  const { data } = await instance.post("/api/users/login", userInfo);
  if (data.token) {
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
        if (key == "profile_image" || key == "business_image") {
          formData.append(key, {
            uri: userInfo[key],
            type: "png",
            name: "ooo",
          });
        } else {
          formData.append(key, userInfo[key]);
        }
      }
    }

    const { data } = await instance.post("/api/users/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
  const { data } = await instance.post("/api/users/verify-email", {
    email,
    verification_code,
  });
  return data;
};

// get All Users(for send notifications purpose)
const getAllUsers = async () => {
  const { data } = await instance.get("/api/users");
  return data;
};

export { register, login, verifyEmail, getAllUsers };
