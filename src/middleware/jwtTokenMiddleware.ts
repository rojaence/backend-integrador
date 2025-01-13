import { Request, Response, NextFunction } from 'express'
import { CodesHttpEnum } from '../enums/codesHttpEnums'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from '../environment/env'
import { HttpResponse } from '../utils/httpResponse'

export const jwtTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      res
        .status(CodesHttpEnum.unauthorized)
        .json(HttpResponse.fail(res, CodesHttpEnum.unauthorized, "Error", "Se requiere autenticación"))
      return
    }
    verify(token!, JWT_SECRET, (err, decoded) => {
      if (err) {
        res
        .status(CodesHttpEnum.forbidden)
        .json(HttpResponse.fail(res, CodesHttpEnum.forbidden, "Error", "Autenticación no válida"))
        return
      }
      next()
    })
  } catch (error) {
    next(error)
  }
}