import axios from 'axios';

const api = axios.create({
    baseURL: 'https://i-finances-backend.herokuapp.com/api',
});

export default api;