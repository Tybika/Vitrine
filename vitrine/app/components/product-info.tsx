type ProductInfoProps = {
    price: number,
    description: string,
    category: string
}

function formatPrice(price: number) {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductInfo({ description, price, category }: ProductInfoProps) {
    return (
        <div className="w-full flex-col md:w-1/2  md:justify-items-end">
            <div className="w-full md:flex-col md:gap-2">
                <div className="w-full mb-6 md:basis-1/3 md:flex">
                    <p className="font-bold text-center md:m-6">Descrição</p>
                    <p className="text-justify ml-1 md:mr-12">{description}</p>

                </div>
                <div className="w-full mr-12 mb-6 md:flex md:items-center">
                    <p className="font-bold text-center md:m-6">Categoria</p>
                    <p className="md:mr-12">{category}</p>
                </div>
            </div>
            <div className="w-full text-center text-lg p-2 bg-stone-200 border-2 border-black select-none md:w-1/10">
                <p>{formatPrice(price)}</p>
            </div>
        </div>
    )
}