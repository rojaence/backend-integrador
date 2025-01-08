import { Joi } from "express-validation";

export const createValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  })
}

export const idParamValidation = {
  params: Joi.object({
    id: Joi.number().required()
  })
}

export const putValidation = {
  params: idParamValidation.params,
  body: createValidation.body
}