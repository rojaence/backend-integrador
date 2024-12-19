import express, { NextFunction, Request, Response } from 'express'
import { PORT } from './environment/env'
import authRoutes from "./modules/auth/routes"

const app = express()

app.use(express.json())
const prefix = "/api"
app.use(`${prefix}/auth`, authRoutes)

const port = PORT

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`)
})


