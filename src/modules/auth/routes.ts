import { Router, Response, Request, NextFunction } from "express";
import { RegisterController } from "./controller";

const routes = Router()


routes.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await RegisterController(req)
    res.status(201).json(response)
  } catch (error) {
    throw error
  }
})

export default routes