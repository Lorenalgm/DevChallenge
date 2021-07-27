import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVCHALLENGE_API,
});

export default api;
