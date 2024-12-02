import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getTareas = async () => {
  const response = await api.get('/tareas');
  return response.data;
};

export const crearTarea = async (tarea) => {
  const response = await api.post('/tareas', tarea);
  return response.data;
};

export const actualizarTarea = async (id, tarea) => {
  const response = await api.put(`/tareas/${id}`, tarea);
  return response.data;
};

export const eliminarTarea = async (id) => {
  const response = await api.delete(`/tareas/${id}`);
  return response.data;
};