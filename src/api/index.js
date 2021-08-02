import axios from 'axios';

// const process = require('process');

const Api = axios.create({
    baseURL: 'https://randomuser.me/api/',
    
});

export default Api;