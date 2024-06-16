import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;