import express from 'express'
import { PORT } from './environment/env'
import authRoutes from "./modules/auth/routes"
import userRoutes from "./modules/user/routes"

const app = express()

app.use(express.json())
const prefix = "/api"
app.use(`${prefix}/auth`, authRoutes)
app.use(`${prefix}/users`, userRoutes)

const port = Number(PORT)

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`)
})


