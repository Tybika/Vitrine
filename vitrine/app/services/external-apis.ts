import axios from "axios";

const serverBaseURL = import.meta.env.VITE_SERVER_URL ?? "http://localhost:3001";

export const cepAPI = axios.create({
    baseURL: `${serverBaseURL}/cep`
});

export const productAPI = axios.create({
    baseURL: `${serverBaseURL}/products`
});
