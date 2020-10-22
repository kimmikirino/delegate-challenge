import axios from "axios";
import environments from "../config/environments";

const api = axios.create({
  baseURL: environments.ENDPOINT,
  headers: {
    "content-type": "application/json",
  },
});

export default api;