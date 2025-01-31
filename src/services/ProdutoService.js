import axios from "axios";

const baseUrl = "http://localhost:8080/api/produto";

export const buscarTodos = () => axios.get(baseUrl);

export const excluir = (id) => axios.delete(`${baseUrl}/${id}`);

export const editar = (id, produto) => axios.put(`${baseUrl}/${id}`, produto);

export const salvar = (produto) => axios.post(baseUrl, produto);

export const buscarPorId = (id) => axios.get(`${baseUrl}/${id}`);
