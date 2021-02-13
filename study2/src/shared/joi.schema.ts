import * as Joi from 'joi'

// ref: https://joi.dev/api/?v=17.3.0
export const JoiSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  breed: Joi.string()
})
