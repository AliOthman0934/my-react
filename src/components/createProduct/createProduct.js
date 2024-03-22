import { useState } from "react";
import ProductForm from "./productForm";

function CreateProduct(props) {
    let [showform,updateShowForm] = useState(false);

    function onCreateProduct(product) {
        props.createProduct(product)
    }

    function onShowCreateProduct(){
        updateShowForm(true)
    }

    function cancelCreatProduct(){
        updateShowForm(false)

    }


    return (
            <div >
                {!showform && <button onClick={onShowCreateProduct}>Crate Product</button>}
                {showform && <ProductForm createProduct={onCreateProduct} onCancel={cancelCreatProduct}></ProductForm>}
            </div>

)
}

export default CreateProduct;