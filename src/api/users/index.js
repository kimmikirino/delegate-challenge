import api from "../";

export const getUsers = async (page) => {
  const { data } = await api.get(`/users?page=${page}`);

  return data;
};

export const putUser = async (id, body) => {
  const { data } = await api.put(`/users/${id}`, body);

  return data;
};
