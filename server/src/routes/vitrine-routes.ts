import { Application } from 'express';
import { getAddressByCEP } from '../controllers/address-controller';
import { getProductById, getProducts } from '../controllers/product-controller';

export function VitrineRoutes(app: Application) {
    app.get("/products", getProducts);
    app.get("/products/:id", getProductById);

    app.get("/cep/:cep/json", getAddressByCEP);

    return app;
}
