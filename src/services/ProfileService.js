import { api } from './api';
import SecurityService from './SecurityService';

const getProfile = (callback) => {
  api.get('profile').then(callback);
};

const registerProfile = (profile, callback) => {
  api.post('profile', profile).then(callback);
}

const login = (profile, callback, error) => {
  api.post('profile/login', profile)
    .then((response) => {
      const token = response.data.token;
      SecurityService.setToken(token);
    })
    .then(callback)
    .catch(error);
}

const logout = () => {
  if (SecurityService.isAutenticado()) {
    SecurityService.removeToken();
  }
};

export {
  getProfile,
  registerProfile,
  login,
  logout
}