const Joi = require('joi');

const currentYEAR = new Date().getFullYear();
const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number()
    .integer()
    .min(1900)
    .max(currentYEAR)
    .required(),
});

module.exports = { AlbumPayloadSchema };
