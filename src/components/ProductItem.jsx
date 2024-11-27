import "./ProductItem.css"

const ProductItem = (props) => {
    const { productItem } = props;

    return (
        <div className={"product-item-wrapper"}>
            <span>{productItem.name}</span>
            <span>{productItem.price}</span>
            <span>{productItem.status ? <span>In stock</span> : <span>Out of stock</span>}</span>
        </div>
    )
}

export default ProductItem;