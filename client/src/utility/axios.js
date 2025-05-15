import axios from "axios";

const serverPort = import.meta.env.PORT || 5000;

export const axiosInstance = axios.create({
  //local endpoint reference
  baseURL: `http://localhost:${serverPort}/api`,

  // deployed endpoint reference
  // baseURL: "https://evangadiforumproject-vpsk.onrender.com/api/v1",
});
