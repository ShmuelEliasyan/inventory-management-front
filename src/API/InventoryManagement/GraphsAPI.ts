import axios from 'axios';

export const GRAPHS_API = axios.create({
    baseURL: `http://localhost:8080/graphs/`
});
