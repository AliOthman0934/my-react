import ProductForm from "./productForm";

function CreateProduct(props) {
    function onCreateProduct(product) {
        props.createProduct(product)
    }
    return (<div className="row custom-form">
        <div className="col-lg-8 max-auto">
            <div className="list-group shadow">
                <ProductForm createProduct={onCreateProduct}></ProductForm>
            </div>

        </div>
    </div>)
}

export default CreateProduct;