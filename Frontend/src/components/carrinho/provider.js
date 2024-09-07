import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/13929ae3af6844fa9c428425528b9f42',
    timeout: 10000,
});

