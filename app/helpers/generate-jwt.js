const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');

const generateJwt = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(payload, constants.SECRETORPRIVATEKEY, {
      expiresIn: 60 * 60
    }, (err, token) => {
      if (err) {
        reject('No se pudo generar el token');
      } else {
        resolve(token);
      }
    });
  });
};


module.exports = {
  generateJwt
}