import { Request, Response, NextFunction } from 'express'
import { CodesHttpEnum } from '../enums/codesHttpEnums'
import { JsonWebTokenError, JwtPayload, TokenExpiredError, verify, VerifyErrors } from 'jsonwebtoken'
import { JWT_SECRET } from '../environment/env'
import { HttpResponse } from '../utils/httpResponse'
import { ITokenDecoded } from '../interfaces/Auth.interface'

export const jwtTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      res
        .status(CodesHttpEnum.unauthorized)
        .json(HttpResponse.fail(res, CodesHttpEnum.unauthorized, "Error de auth", "Se requiere autenticación"))
      return
    }

    // verify(token!, JWT_SECRET, (err, decoded) => {
    //   if (err) {
    //     if (err instanceof TokenExpiredError) {
    //       return res
    //         .status(CodesHttpEnum.unauthorized)
    //         .json(HttpResponse.fail(res, CodesHttpEnum.unauthorized, "La sesión ha expirado"))
    //     }
    //     res
    //     .status(CodesHttpEnum.forbidden)
    //     .json(HttpResponse.fail(res, CodesHttpEnum.forbidden, "Error", "Autenticación no válida"))
    //     return
    //   }
    //   next()
    // })

    /* 
      Esta forma de manejar la verificación permite trabajar con el token
      de forma más limpia y legible sin tener que hacer uso del callback en verify
    */

    const validated: ITokenDecoded = verify(token!, JWT_SECRET) as ITokenDecoded
    const now = Math.floor(Date.now() / 1000)
    if (validated.exp < now) {
      res
        .status(CodesHttpEnum.unauthorized)
        .json(HttpResponse.response(CodesHttpEnum.unauthorized, "La sesión ha expirado"))
    }
    next()
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      res
        .status(CodesHttpEnum.unauthorized)
        .json(HttpResponse.response(CodesHttpEnum.unauthorized, "Error de auth", "La sesión ha expirado"))
    }
    if (error instanceof JsonWebTokenError) {
      res
        .status(CodesHttpEnum.unauthorized)
        .json(HttpResponse.response(CodesHttpEnum.unauthorized, "Error de auth", "Autenticación no válida"))
    }
    next(error)
  }
}