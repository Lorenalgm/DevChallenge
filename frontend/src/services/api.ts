import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_DEVCHALLENGE_API,
});

export { api }