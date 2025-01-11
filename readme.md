## Tech stack
Node 22.12.0
Express

## Deploy
1. Crear archivo .env y rellenar las variables de entorno  
en base a .env.example
2. Instalar dependencias con el comando: ``npm i``
3. Levantar el proyeto con el comando: ``npm run dev``

## Sequelize auto
Comando para migrar una base de datos existente a models  
con sequelize  

```bash
   npx sequelize-auto -h localhost -d db_name -u username -x pass -p 5432  --dialect postgres -o ./src/models -l ts --useDefine --schema retail --caseFile k --caseProp p --caseModel p
```