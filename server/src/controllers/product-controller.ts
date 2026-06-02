import { Request, Response } from 'express';
import { ProductModel } from '../models/product-model';

export async function getProducts(req: Request, res: Response) {
    try {
        const limit = parsePositiveInt(req.query.limit ?? req.params.amount);
        const offset = parsePositiveInt(req.query.offset);

        const query = ProductModel.find().sort({ id: 1 }).skip(offset ?? 0);

        if (limit !== null) {
            query.limit(limit);
        }

        const products = await query.lean();

        res.json(products);
    }
    catch (error: unknown) {
        res.status(500).json({ result: error });
    }
}

export async function getProductById(req: Request, res: Response) {
    const productId = Number(req.params.id);

    if (!Number.isInteger(productId)) {
        res.status(400).json({ result: "Invalid product id" });
        return;
    }

    try {
        const product = await ProductModel.findOne({ id: productId }).lean();

        if (!product) {
            res.status(404).json({ result: "Product not found" });
            return;
        }

        res.json(product);
    }
    catch (error: unknown) {
        res.status(500).json({ result: error });
    }
}

function parsePositiveInt(value: unknown): number | null {
    const rawValue = Array.isArray(value) ? value[0] : value;

    if (rawValue === undefined) {
        return null;
    }

    const numberValue = Number(rawValue);

    if (!Number.isInteger(numberValue) || numberValue < 0) {
        return null;
    }

    return numberValue;
}
