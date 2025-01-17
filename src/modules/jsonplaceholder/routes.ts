import { NextFunction, Request, Response, Router } from "express";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { HttpResponse } from "../../utils/httpResponse";
import { jsonPlaceholderApi } from "../../apis/jsonplaceholder.api";
import { GetUsersController } from "./controller"
import { IPost } from "./interfaces";

const routes = Router()

routes.get('/users-axios', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await GetUsersController(req, false)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

routes.get('/users-fetch', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await GetUsersController(req, true)
    res.status(response.code).json(response)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})

routes.get('/posts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await jsonPlaceholderApi.get('/posts')
    const responseApi = HttpResponse.response(CodesHttpEnum.ok, response.data)
    res.status(responseApi.code).json(responseApi.data)
  } catch (error) {
    if (error instanceof Error) {
      HttpResponse.fail(res, CodesHttpEnum.internalServerError, error.message)
    }
  }
})


export default routes