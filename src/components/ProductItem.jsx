import "./ProductItem.css"

const ProductItem = () => {
    const productItem = {
        name: "Football",
        price: 49.9,
        status: true
    }

    return (
        <div className={"product-item-wrapper"}>
            <span>{ProductItem.name}</span>
            <span>49.9</span>
            <span>{productItem.status ? <span>In stock</span> : <span>Out of stock</span>}</span>
        </div>
    )
}

export default ProductItem;