import { Link } from "react-router";
import { ProductImage } from "./product-image"

type ProductCardProps = {
    id: number,
    name: string,
    price: number,
    image: string
}

function formatPrice(price: number) {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
    return (
        <div className="relative w-full md:w-1/4 bg-stone-400 rounded-2xl overflow-hidden">
            <Link to={"/product/" + id.toString()}>
                <ProductImage image={image} />
                <p className="absolute top-0 p-2 w-full bg-stone-300/45 text-center font-semibold">{name}</p>
                <p className="absolute bottom-5 right-6 text-lg p-2 bg-stone-200 border border-black">{formatPrice(price)}</p>
            </Link>
        </div>
    );
}