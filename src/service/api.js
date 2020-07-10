import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:44343/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'Content-Type': 'application/json',
    }
})

export default api;
