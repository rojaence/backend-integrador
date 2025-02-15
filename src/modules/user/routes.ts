import { NextFunction, Request, Response, Router } from "express";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { HttpResponse } from "../../utils/httpResponse";
import { CreateController, GetByIdController, GetController, DeleteController, PutController } from "./controller";
import { createValidation, idParamValidation, putValidation } from "./validations";
import { validate } from "express-validation";

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

routes.post('/', 
  validate(createValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CreateController(req)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

routes.get('/:id', 
  validate(idParamValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await GetByIdController(req)
      res.status(response.code).json(response)
    } catch (error) {
      if (error instanceof Error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
      }
    }
  }
)

routes.delete('/:id',
  validate(idParamValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await DeleteController(req)
      res.status(response.code).json(response)
    } catch (error) {
      if (error instanceof Error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
      }
    }
  }
)

routes.put('/:id',
  validate(putValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await PutController(req)
      res.status(response.code).json(response)
    } catch (error) {
      if (error instanceof Error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
      }
    }
  }
)

export default routes