const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('date').isDate(),
    body('service').isMongoId(),
    body('serviceSlug').isSlug(),
    body('pet').isMongoId(),
  ];
};

// Middleware
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
