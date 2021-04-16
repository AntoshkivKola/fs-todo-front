import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = data => {
  const responsePromise = httpClient.post('/tasks', data);
  return responsePromise;
};

export const getTasks = () => httpClient.get('/tasks');

export const updateTask = ({ id, values }) =>
  httpClient.patch(`/tasks/${id}`, values);

export const deleteTask = ({ id }) => httpClient.delete(`/tasks/${id}`);
