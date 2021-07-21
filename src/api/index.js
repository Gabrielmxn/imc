import axios from 'axios';

// const process = require('process');

const api = axios.create({
    baseURL: 'https://randomuser.me/api/',
    
});

export default api;