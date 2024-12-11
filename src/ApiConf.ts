import axios from "axios";

export const API_HOST =
  "https://prod-trading-signals-alb-2085839500.eu-west-2.elb.amazonaws.com";

const axiosClient = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
