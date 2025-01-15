import { Joi } from "express-validation";

export const idParamValidation = {
  params: Joi.object({
    id: Joi.number().required()
  })
}