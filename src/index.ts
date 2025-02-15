import express, { Response, Request, NextFunction } from 'express'
import { PORT } from './environment/env'
import authRoutes from "./modules/auth/routes"
import userRoutes from "./modules/user/routes"
import categoryRoutes from "./modules/category/routes"
import jsonplaceholderRoutes from "./modules/jsonplaceholder/routes"
import productRoutes from "./modules/product/routes"
import { ValidationError } from 'express-validation'
import { database } from './database/config/initDatabase'
import { jwtTokenMiddleware } from './middleware/jwtTokenMiddleware'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
const swaggerDocument = YAML.load('./src/config/swagger.config.yaml')


// import db from './database/config/dbOrm'
// import { initModels } from './models/init-models'


const app = express()

app.use(express.json())

// Conexion a db
async function main() {
  try {

    /* 
      Esta forma no permite usar la clase Usuario
      directamente en el repository, debe usarse
      la instancia que devuelve initModels
    */
   
    // await db.authenticate()
    // const models = initModels(db)
    // const users = await models.Usuario.findAll()
    // console.log('______________________________')
    // console.log(users)
    // console.log('______________________________')
    // await db.sync({alter: true})

    /* 
      Esta forma usando un patrón singleton
      hace la tarea de encapsular las instancias de los modelos
      inicializados de initModels y los expone
    */
    await database.sequelize.authenticate()
    await database.sequelize.sync({alter: true})
    
    console.log('Conexión establecida con la base de datos');
  } catch (error) {
    console.error('Ocurrió un error al conectarse con la base de datos:', error);
  }
}

main()

const prefix = "/api"
app.use(`${prefix}/auth`, authRoutes)
app.use(`${prefix}/users`, jwtTokenMiddleware, userRoutes)
app.use(`${prefix}/categories`, jwtTokenMiddleware, categoryRoutes)
app.use(`${prefix}/products`, jwtTokenMiddleware, productRoutes)
app.use(`${prefix}/jsonplaceholder`, jsonplaceholderRoutes)


// Swagger UI
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {

  if (res.headersSent) {
    return
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
} as any)

const port = Number(PORT)
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`)
})


