import axios from "axios";

// const RENDER_BACKEND_URL = "https://portfolio-ai-m6w2.onrender.com";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const sendMessage = async (question: string) => {
  const response = await API.post("/chat", { question });
  return response.data.answer;
};
