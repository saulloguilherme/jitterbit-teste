import OrderService from "../services/orderService.js";

export default class OrderController {

    /**
     * @swagger
     * /order:
     *   post:
     *     summary: Criar novo pedido
     *     tags: [Pedidos]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateOrderInput'
     *     responses:
     *       201:
     *         description: Pedido criado com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       400:
     *         description: Dados inválidos
     */
    static async createOrder(req, res, next) {
        try {
            const order = await OrderService.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /order/{id}:
     *   get:
     *     summary: Buscar pedido por número
     *     tags: [Pedidos]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: Número do pedido
     *     responses:
     *       200:
     *         description: Pedido encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       404:
     *         description: Pedido não encontrado
     */
    static async getOrderById(req, res, next) {
        try {
            const order = await OrderService.getById(req.params.id);
            res.json(order);
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /order/list:
     *   get:
     *     summary: Listar todos os pedidos
     *     tags: [Pedidos]
     *     responses:
     *       200:
     *         description: Lista de pedidos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     */
    static async getAllOrders(req, res, next) {
        try {
            const orders = await OrderService.getAll();
            res.json(orders);
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /order/{id}:
     *   put:
     *     summary: Atualizar pedido
     *     tags: [Pedidos]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateOrderInput'
     *     responses:
     *       200:
     *         description: Pedido atualizado
     *       404:
     *         description: Pedido não encontrado
     */
    static async updateOrderById(req, res, next) {
        try {
            const order = await OrderService.update(req.params.id, req.body);
            res.json(order);
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /order/{id}:
     *   delete:
     *     summary: Deletar pedido
     *     tags: [Pedidos]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Pedido deletado
     *       404:
     *         description: Pedido não encontrado
     */
    static async deleteOrderById(req, res, next) {
        try {
            await OrderService.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}