import axios from "axios";

export const API_HOST =
  "https://www.cryptosignalzone.click";

const axiosClient = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
