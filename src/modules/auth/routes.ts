import { Router, Response, Request, NextFunction } from "express";
import { LoginController, RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { validate } from "express-validation";
import { loginValidation, registerValidation } from "./validations";

const routes = Router()


routes.post('/register', 
  validate(registerValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await RegisterController(req)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

routes.post('/login', 
  validate(loginValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await LoginController(req)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

export default routes