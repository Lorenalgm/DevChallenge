import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_DEVCHALLENGE_API,
});

export default api;
