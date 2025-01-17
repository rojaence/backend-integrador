import { Joi } from "express-validation";
import { ProductAttributes } from "../../models/Product";
import { idParamValidation } from "../common/validations";

export const createValidation = {
  body: Joi.object<ProductAttributes>({
    name: Joi.string().required(),
    description: Joi.string().min(3),
    categoryId: Joi.number().required(),
    price: Joi.number().required(),
    status: Joi.boolean()
  })
}

export const putValidation = {
  params: idParamValidation.params,
  body: createValidation.body
}