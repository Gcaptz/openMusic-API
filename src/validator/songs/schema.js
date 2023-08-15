const Joi = require('joi');

const currentYEAR = new Date().getFullYear();
const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number()
    .integer()
    .min(1900)
    .max(currentYEAR)
    .required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number(),
  albumId: Joi.string(),
});

module.exports = { SongPayloadSchema };
