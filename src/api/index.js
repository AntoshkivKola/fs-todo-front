import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = data => {
  const responsePromise = httpClient.post('/tasks', data);
  return responsePromise;
};

export const getTasks = () => {
  const responsePromise = httpClient.get('/tasks');
  return responsePromise;
};

export const updateTask = ({ id, values }) => {
  const responsePromise = httpClient.patch(`/tasks/${id}`, values);
  return responsePromise;
};

export const deleteTask = ({ id }) => {
  const responsePromise = httpClient.delete(`/tasks/${id}`);
  return responsePromise;
};