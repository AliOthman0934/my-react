import React, {useState} from "react";
import Button from "./Button";

function ProductsDetails(props) {
    let badgClass = "badge";
    badgClass += props.isAvailable ? " bg-success" : "  bg-danger";

    let [productCount,upDateCount]= useState(0)

    function displayFormattedProductsCount() {
        return productCount > 0 ? productCount : "zero";
    };

    let incrementProductCount = function(){
        upDateCount(++productCount)
    };

    let decrmnetProductCount = function(){
        upDateCount(--productCount)
        console.log(productCount)
    };


    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{props.price}</h6>
            <Button envntHandler={decrmnetProductCount}>-</Button>
            <span>{displayFormattedProductsCount()}</span>
            <Button envntHandler={incrementProductCount}>+</Button>
            <span className={badgClass}>{props.isAvilable ? "Avilable" : "Unavilable"}</span>
        </div>
    )
}

export default ProductsDetails;