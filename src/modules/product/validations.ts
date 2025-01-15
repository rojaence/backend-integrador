import { Joi } from "express-validation";
import { ProductAttributes } from "../../models/Product";

export const createValidation = {
  body: Joi.object<ProductAttributes>({
    name: Joi.string().required(),
    description: Joi.string().min(3),
    categoryId: Joi.number().required(),
    price: Joi.number().required(),
    status: Joi.boolean()
  })
}