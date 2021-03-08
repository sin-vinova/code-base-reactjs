import axios from 'axios';

export const APIInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const setToken = (token) => {
  APIInstance.defaults.headers.common['Authorization'] = token;
};

setToken(`Basic ${process.env.REACT_APP_API_TOKEN}`);

APIInstance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  }
);
