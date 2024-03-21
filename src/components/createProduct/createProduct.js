import ProductForm from "./productForm";

function CreateProduct(){
    return(<div className="row custom-form">
        <div className="col-lg-8 max-auto">
            <div className="list-group shadow">
                <ProductForm></ProductForm>
            </div>
            
        </div>
    </div>)
}

export default CreateProduct;