import { ProductModel } from "./product-model";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: {
        id?: number;
        name?: string;
        image?: string;
        creationAt?: string;
        updatedAt?: string;
    };
    creationAt?: string;
    updatedAt?: string;
}

export async function GetProductFromAPI(): Promise<Product[]> {
    const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50");

    if (!response.ok) {
        throw new Error(`External product API returned ${response.status}`);
    }

    return response.json() as Promise<Product[]>;
}

export function ProductMapFromAPI(products: Product[]) {
    return products.map(ProductMapData);
}

export function ProductMapData(product: Product) {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        images: Array.isArray(product.images) ? product.images : [],
        category: {
            id: product.category?.id,
            name: product.category?.name,
            image: product.category?.image,
            creationAt: product.category?.creationAt,
            updatedAt: product.category?.updatedAt,
        },
        creationAt: product.creationAt,
        updatedAt: product.updatedAt,
    };
}

export async function CreateMockup() {
    const productsStored = await ProductModel.estimatedDocumentCount();

    if (productsStored > 0) {
        return;
    }


    const APIProducts = await GetProductFromAPI();
    const products = ProductMapFromAPI(APIProducts);

    await ProductModel.insertMany(products, { ordered: false });
    console.log(`${products.length} produtos inseridos no mock ^u^`);
}
