import express from 'express';
import connect from "./config/database.js"
import routes from "./routes/index.js"

const db_connection = await connect()

db_connection.on("error", (err) => {
    console.log("Erro na conexão com o banco de dados.", err);
});

db_connection.once("open", () =>{
    console.log("Conexão com o banco de dados feita com sucesso.");
})

const app = express();
routes(app)

export default app;