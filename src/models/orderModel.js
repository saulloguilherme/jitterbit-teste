import mongoose from "mongoose";
import { itemSchema } from "./itemModel.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           example: "2434"
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: number
 *           example: 1000
 *
 *     Order:
 *       type: object
 *       properties:
 *         orderId:
 *           type: string
 *           example: "v10089015vdb-01"
 *         value:
 *           type: number
 *           example: 10000
 *         creationDate:
 *           type: string
 *           format: date-time
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Item'
 *
 *     CreateOrderInput:
 *       type: object
 *       properties:
 *         numeroPedido:
 *           type: string
 *           example: "v10089015vdb-01"
 *         valorTotal:
 *           type: number
 *           example: 10000
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               idItem:
 *                 type: string
 *                 example: "2434"
 *               quantidadeItem:
 *                 type: integer
 *                 example: 1
 *               valorItem:
 *                 type: number
 *                 example: 1000
 */
const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true, unique: true},
    value: {type: Number, required: true},
    creationDate: {type: mongoose.Schema.Types.Date, required: true},
    items: {type: [itemSchema], required: true},
    });

const order = mongoose.model("orders", orderSchema);

export { order, orderSchema };