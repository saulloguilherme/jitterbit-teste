import express from 'express';
import OrderController from "../controllers/orderController.js";
import { createOrderValidator, orderIdParamValidator} from '../validators/orderValidator.js';
import validate from "../middlewares/validate.js"

const routes = express.Router();

routes.get("/order/list", OrderController.getAllOrders);
routes.get("/order/:id", orderIdParamValidator, validate, OrderController.getOrderById);

routes.post("/order", createOrderValidator, validate, OrderController.createOrder)
routes.put("/order/:id", createOrderValidator, orderIdParamValidator, validate, OrderController.updateOrderById)

routes.delete("/order/:id", orderIdParamValidator, validate, OrderController.deleteOrderById)

export default routes;