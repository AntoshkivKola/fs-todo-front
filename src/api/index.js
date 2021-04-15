import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = data => {
  const responsePromise = httpClient.post('/tasks', data);
  return responsePromise;
};
