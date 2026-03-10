import express from 'express';
import connect from "./config/database.js"
import routes from "./routes/index.js"
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import errorHandler from './middlewares/errorHandler.js';

const db_connection = await connect()

db_connection.on("error", (err) => {
    console.log("Erro na conexão com o banco de dados.", err);
});

db_connection.once("open", () =>{
    console.log("Conexão com o banco de dados feita com sucesso.");
})

const app = express();
app.use(express.json());
routes(app)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

export default app;