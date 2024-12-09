import axios from "axios";

export const API_HOST =
  "http://prod-trading-signals-alb-1104809583.eu-west-2.elb.amazonaws.com";

const axiosClient = axios.create({
  baseURL: API_HOST,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
