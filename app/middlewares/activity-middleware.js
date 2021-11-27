const { check } = require('express-validator');
const validateFields = require('./validate-fields');

module.exports = {
  validateCreate: [
    check('name', 'name is required.').notEmpty().bail().isString(),
    check('content', 'content is required').notEmpty().bail().isString(),

    validateFields,
  ],
};
