import axios from "axios";

export const API_HOST = "http://localhost:8298";

const axiosClient = axios.create({
  baseURL: API_HOST,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
