import express, { NextFunction, Request, Response } from 'express'
import { PORT } from './environment/env'

const app = express()

const prefix = "/api"
const port = PORT

app.get(`${prefix}/auth`, 
  async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hola mundo')
})

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`)
})


