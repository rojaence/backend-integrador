import { Request, Response, NextFunction } from 'express'

export const jwtTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization
  } catch (error) {
    
  }
}