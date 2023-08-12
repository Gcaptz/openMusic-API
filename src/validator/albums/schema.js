const Joi = require('joi');

const MAX_YEAR = new Date().getFullYear();
const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number()
    .integer()
    .min(1900)
    .max(MAX_YEAR)
    .required(),
});

module.exports = { AlbumPayloadSchema };
