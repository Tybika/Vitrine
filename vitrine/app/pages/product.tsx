import { useEffect, useState } from "react";
import { Cep } from "~/components/cep";
import { Header } from "~/components/header";
import { ProductImage } from "~/components/product-image";
import { ProductInfo } from "~/components/product-info";

type Product = {
    id: number,
    title: string,
    images: Array<string>,
    price: number,
    description: string,
    category: object
}


export function Product({ product }: { product: Product }) {
    return (
        <section>
            <Header></Header>
            {product &&
                <div className="flex-col m-6">
                    <h1 className="text-xl m-6 font-bold">{product.title}</h1>
                    <div className="md:flex">
                        <ProductImage image={product.images[0]} />
                        <ProductInfo
                            description={product.description}
                            price={product.price}
                            category={product.category.name}
                        />
                    </div>
                    <div className="md:flex justify-end items-end md:mr-[25%]">
                        <Cep></Cep>
                        <button className="w-full py-5 my-3 md:w-auto px-6 md:py-2 bg-green-700 text-white font-medium rounded-lg cursor-pointer">Comprar</button>
                    </div>
                </div>
            }

        </section>
    );
}