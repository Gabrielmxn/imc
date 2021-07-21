import axios from 'axios';

const process = require('process');

const api = axios.create({
    baseURL: process.env.REACT_BASEURL,
    
});

export default api;