// criando a requição para o bitly


import axios from 'axios'

export const key = 'f4bf3d8f606add85750f5331142e15ed9d9b0e86'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;