import type { Route } from "./+types/product";
import { Product } from "../pages/product";
import { productAPI } from "~/services/external-apis";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Comprar - Vitrine" },
        { name: "description", content: "product information" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const response = await productAPI.get(`/${params.productId}`)
    return response.data

}

export default function Home({ loaderData }: Route.ComponentProps) {
    return <Product product={loaderData} />;
}
