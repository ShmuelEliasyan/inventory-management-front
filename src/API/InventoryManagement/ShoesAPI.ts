import axios from 'axios';

export const SHOES_API = axios.create({
    baseURL: `http://localhost:8080/shoes/`
});

export const SHOES_AMOUNT_API = axios.create({
    baseURL: `http://localhost:8080/shoes-amount/`
});
