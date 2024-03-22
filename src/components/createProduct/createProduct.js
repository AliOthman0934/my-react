import ProductForm from "./productForm";

function CreateProduct(props) {
    function onCreateProduct(product) {
        props.createProduct(product)
    }
    return (
            <div >
                <ProductForm createProduct={onCreateProduct}></ProductForm>
            </div>

)
}

export default CreateProduct;