import { useEffect, useState } from "react";
import { Header } from "~/components/header";
import { ProductCard } from "~/components/product-card";
import { productAPI } from "~/services/external-apis";

// aqui deve pedir coisa pra API e usar o componente product-card pra exibir
type Product = {
    id: number;
    title: string;
    price: number,
    images: Array<string>
}


export function Homepage() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        productAPI.get("?offset=0&limit=6").then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <section>
            <Header></Header>
            <div className="flex gap-4 flex-wrap justify-center">
                {products.map((product) =>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.title}
                        price={product.price}
                        image={product.images[0]}
                    />
                )}
            </div>
        </section>
    );
}

