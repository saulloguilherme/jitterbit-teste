import express from "express"
import orders from "./orderRoutes.js"

const routes = (app) => {
    app.use(express.json(), orders);
}

export default routes;