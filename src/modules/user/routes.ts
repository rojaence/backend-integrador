import { NextFunction, Request, Response, Router } from "express";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { HttpResponse } from "../../utils/httpResponse";
import { GetController } from "./controller";

const routes = Router()

routes.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await GetController(req)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

export default routes