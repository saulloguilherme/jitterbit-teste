import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    productId: {type: String, required: true},
    quantity: {type: mongoose.Schema.Types.Int32, required: true},
    price: {type: mongoose.Schema.Types.Decimal128, required: true}
    }, {versionKey: false});

const item = mongoose.model("items", itemSchema);

export { item, itemSchema };