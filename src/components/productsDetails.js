let productCount = 0;
function displayFormattedProductsCount() {
    return productCount > 0 ? productCount : "zero";
}

function ProductsDetails(props) {
    let badgClass = "badge";
    badgClass += props.isAvailable ? " bg-success" : "  bg-danger";
    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{props.price}</h6>
            <button className="btn btn-primary">-</button>
            <span>{displayFormattedProductsCount()}</span>
            <button className="btn btn-primary">+</button>
            <span className={badgClass}>{props.isAvilable ? "Avilable" : "Unavilable"}</span>
        </div>
    )        
}

export default ProductsDetails;