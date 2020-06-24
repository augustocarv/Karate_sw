import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Accept-Encondig': 'gzip, deflate, br',
    }
})

export default api;
