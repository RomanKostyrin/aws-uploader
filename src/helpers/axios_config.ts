import axios from "axios";

const API_URL = process.env.BACKEND_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

export default axiosApi;
