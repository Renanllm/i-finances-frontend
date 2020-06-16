const TOKEN = 'token';

const getToken = () => {
    return sessionStorage.getItem(TOKEN);
}

const setToken = (token) => {
    sessionStorage.setItem(TOKEN, token);
}

const isAutenticado = () => {
    return getToken() ? true : false;
};

const removeToken = () => {
    sessionStorage.removeItem(TOKEN);
}

export default {
    getToken,
    setToken,
    isAutenticado,
    removeToken
};