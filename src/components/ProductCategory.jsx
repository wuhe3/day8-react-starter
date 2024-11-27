import ProductItem from "./ProductItem";

const ProductCategory = () => {
    const products = [
        {
            name: "Football",
            price: 49.9,
            status: true
        },
        {
            name: "Tennis Ball",
            price: 9.9,
            status: false
        },
        {
            name: "Basketball",
            price: 29.9,
            status: true
        }
    ]

    return (
        <div>
            {products.map((product, index) => {
                return <ProductItem productItem={product} key={product.name + index} />
            })}
        </div>
    )
}

export default ProductCategory;