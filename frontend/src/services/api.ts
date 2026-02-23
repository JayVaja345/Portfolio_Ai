// import axios from "axios";

// // const RENDER_BACKEND_URL = "https://portfolio-ai-m6w2.onrender.com";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export const sendMessage = async (question: string) => {
//   const response = await API.post("/chat", { question });
//   return response.data.answer;
// };

import axios from "axios";

// Add immediate console log to see what's happening
console.log("🔥 API.ts loaded");
console.log("🔥 VITE_API_URL from import.meta:", import.meta.env.VITE_API_URL);
console.log("🔥 All env vars:", import.meta.env);

// Hardcoded fallback - use this temporarily to test
const RENDER_URL = "https://portfolio-ai-m6w2.onrender.com";

// Use env var with fallback to hardcoded URL
const API_URL = import.meta.env.VITE_API_URL || RENDER_URL;

console.log("🔥 Using API_URL:", API_URL);

const API = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for debugging
API.interceptors.request.use((request) => {
  console.log("🚀 Request to:", (request.baseURL || "") + request.url);
  return request;
});

export const sendMessage = async (question: string) => {
  try {
    console.log("📤 Sending to:", API_URL + "/chat");
    const response = await API.post("/chat", { question });
    console.log("📥 Response:", response.data);
    return response.data.answer;
  } catch (error) {
    console.error("❌ Error:", error);
    throw error;
  }
};
