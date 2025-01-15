import { Joi } from "express-validation";
import { CategoryAttributes } from "../../models/Category";

export const createValidation = {
  body: Joi.object<CategoryAttributes>({
    name: Joi.string().required(),
    description: Joi.string().min(3),
    status: Joi.boolean()
  })
}