import express from 'express';
import OrderController from "../controllers/orderController";

const routes = express.Router();

routes.get("/order", OrderController.getOrder);
routes.get("/order", OrderController.getAllOrders);

routes.post("/order", OrderController.createOrder)
routes.put("/order", OrderController.updateOrder)

routes.delete("/order", OrderController.deleteOrder)

export default routes;