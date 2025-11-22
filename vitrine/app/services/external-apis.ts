import axios from "axios";

export const cepAPI = axios.create({
    baseURL: "http://viacep.com.br/ws"
});

export const productAPI = axios.create({
    baseURL: "http://api.escuelajs.co/api/v1/products"
});