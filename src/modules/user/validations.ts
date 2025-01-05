import { Joi } from "express-validation";

export const createValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  })
}

export const idParamValidation = {
  params: Joi.object({
    id: Joi.number().required()
  })
}