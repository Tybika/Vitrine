import { model, Schema } from 'mongoose';

const ProductSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true, index: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        images: { type: [String], default: [] },
        category: {
            id: Number,
            name: String,
            image: String,
            creationAt: String,
            updatedAt: String,
        },
        creationAt: String,
        updatedAt: String,
    },
    {
        id: false,
    }
);

export const ProductModel = model('Product', ProductSchema, 'products');
