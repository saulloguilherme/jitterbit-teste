import mongoose from "mongoose";
import { itemSchema } from "./itemModel";

const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    value: {type: mongoose.Schema.Types.Decimal128, required: true},
    creationDate: {type: mongoose.Schema.Types.Date, required: true},
    items: {type: [itemSchema]}
    }, {versionKey: true});

const order = mongoose.model("orders", orderSchema);

export { order, orderSchema };