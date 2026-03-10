import { order } from '../models/orderModel.js';
import { NotFoundError, ConflictError, ValidationError } from '../exceptions.js';

export default class OrderService {
    
    static async create(data) {
        const mappedOrder = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: data.dataCriacao,
            items: data.items.map(item => ({
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem
            }))
        };

        const existing = await order.findOne({ orderId: mappedOrder.orderId });
        if (existing) throw new ConflictError("orderId já existe");

        return await order.create(mappedOrder);
    }

    static async getById(orderId) {
        const foundOrder = await order.findOne({ orderId });
        if (!foundOrder) throw new NotFoundError("Pedido não encontrado");
        return foundOrder;
    }

    static async getAll() {
        return await order.find();
    }


    static async update(orderId, data) {
        const mappedUpdate = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: data.dataCriacao,
            items: data.items?.map(item => ({
                productId: item.idItem,
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        };

        const updatedOrder = await order.findOneAndUpdate({ orderId },mappedUpdate,{ returnDocument: "after", runValidators: true });
        if (!updatedOrder) throw new NotFoundError("Pedido não encontrado");
        return updatedOrder;
    }

    static async delete(orderId) {
    if (!orderId) throw new ValidationError("ID obrigatório");
    const deletedOrder = await order.findOneAndDelete({ orderId });
    if (!deletedOrder) throw new NotFoundError("Pedido não encontrado");
    return deletedOrder;
    }
}