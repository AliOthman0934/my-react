import Products from "./products";




function ProductList(props) {

    return props.newProduct.length === 0 ? <h1>No product available</h1>:
    (
            <ul className="list-group shadow">
                {props.newProduct.map((product) => {
                    return (<Products
                        key={product.pID}
                        id={product.pID}
                        name={product.pName}
                        description={product.desc}
                        isAvailable={product.isAvailable}
                        imgUrl={product.image}
                        price={product.price}>
                    </Products>)
                })}
            </ul>
    )
}

export default ProductList;