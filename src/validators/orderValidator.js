import { body, param } from 'express-validator';

export const createOrderValidator = [
    body('numeroPedido')
        .notEmpty().withMessage('numeroPedido é obrigatório')
        .isString().withMessage('numeroPedido deve ser string'),

    body('valorTotal')
        .notEmpty().withMessage('valorTotal é obrigatório')
        .isFloat({ min: 0 }).withMessage('valorTotal deve ser número >= 0'),

    body('dataCriacao')
        .notEmpty().withMessage('dataCriacao é obrigatória')
        .isISO8601().withMessage('dataCriacao deve ser uma data válida'),

    body('items')
        .isArray({ min: 1 }).withMessage('items deve ter pelo menos 1 item'),

    body('items.*.idItem')
        .notEmpty().withMessage('idItem é obrigatório')
        .isString().withMessage('idItem deve ser string'),

    body('items.*.quantidadeItem')
        .notEmpty().withMessage('quantidadeItem é obrigatório')
        .isInt({ min: 1 }).withMessage('quantidadeItem deve ser inteiro >= 1'),

    body('items.*.valorItem')
        .notEmpty().withMessage('valorItem é obrigatório')
        .isFloat({ min: 0 }).withMessage('valorItem deve ser número >= 0')
];

export const orderIdParamValidator = [
    param('id')
        .notEmpty().withMessage('ID do pedido é obrigatório')
        .isString().withMessage('ID deve ser string')
];