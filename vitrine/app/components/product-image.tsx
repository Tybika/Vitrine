export function ProductImage({ image }: { image: string }) {
    return (
        <div className="">
            <img
                src={image}
                className="w-full md:max-w-lg"
            >
            </img>
        </div>
    );
}