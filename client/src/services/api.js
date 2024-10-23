import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const api = {
  login: async (username) => {
    const response = await axios.post(`${BASE_URL}/api/login`, { username });
    return response.data;
  },

  getComments: async () => {
    const response = await axios.get(`${BASE_URL}/api/comments`);
    return response.data;
  },

  postComment: async (data) => {
    const response = await axios.post(`${BASE_URL}/api/comments`, data);
    return response.data;
  }
};

