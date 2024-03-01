// axios.js
import axios from "axios";
import { API_URL } from "./config";

const baseURL = API_URL;

const Instance = axios.create({
  baseURL,
  withCredentials: true,
});

Instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
    //   console.log(token);
      config.headers.authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Instance;
