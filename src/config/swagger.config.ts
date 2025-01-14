import swaggerJsdoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "API's ",
      version: '1.0.0',
      description: 'Documentacion de API generada con Swagger y Typescript'
    },
  },
  apis: ['./src/modules/**/routes*.ts'],
};

const openapiSpecification = swaggerJsdoc(options);

export default openapiSpecification