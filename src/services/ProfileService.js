import api from './api';

const getProfile = (callback) => {
  api.get('profile').then(callback);
};

const registerProfile = (profile, callback) => {
  api.post('profile', profile).then(callback);
}

export {
  getProfile,
  registerProfile
}