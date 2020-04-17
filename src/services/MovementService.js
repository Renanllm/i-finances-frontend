import api from './api';

const getMovements = (callback) => {
  api.get('movements').then(callback);
}

const getMovement = (idMovement, callback) => {
  api.get(`movements/${idMovement}`).then(callback);
}

const registerMovement = (movement, callback) => {
  api.post('movements', movement).then(callback);
}

const updateMovement = (idMovement, movement, callback) => {
  api.put(`movements/${idMovement}`, movement).then(callback);
}

export {
  getMovements,
  getMovement,
  registerMovement,
  updateMovement
};