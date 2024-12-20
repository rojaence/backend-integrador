import { Router, Response, Request, NextFunction } from "express";
import { RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";

const routes = Router()


routes.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await RegisterController(req)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

export default routes