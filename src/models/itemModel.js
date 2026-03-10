import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    productId: {type: String, required: true},
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 }
    }, {versionKey: false});

const item = mongoose.model("items", itemSchema);

export { item, itemSchema };