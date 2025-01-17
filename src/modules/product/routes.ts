import { NextFunction, Router, Request, Response } from "express";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { CreateController, DestroyController, GetByIdController, GetController, PutController } from "./controller";
import { createValidation, putValidation } from "./validations";
import { validate } from "express-validation";
import { idParamValidation } from "../common/validations";
import { DeleteModelType } from "../../constants";

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

routes.delete('/logic/:id',
  validate(idParamValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await DestroyController(req, DeleteModelType.Logic)
      res.status(response.code).json(response)
    } catch (error) {
      if (error instanceof Error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
      }
    }
  }
)

routes.delete('/physical/:id',
  validate(idParamValidation, {}, {}) as any,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await DestroyController(req, DeleteModelType.Physical)
      res.status(response.code).json(response)
    } catch (error) {
      if (error instanceof Error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
      }
    }
  }
)

export default routes