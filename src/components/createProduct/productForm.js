import React, {useState} from "react"





function ProductForm(props){

    let [pName,updateName] = useState("")
    let [pPrice,updatePrice] = useState("")
    let [pDescription,updateDescription] = useState("")
    let [pAvailable,updateAvailble] = useState("")
    let [pImageUrl,updateImageUrl] = useState("")

    function nameInputHandler(event){
        return updateName(event.target.value)
    };

    function descriptionInputHandler(event){
        return updateDescription(event.target.value)
    };

    function priceInputHandler(event){
        return updatePrice(event.target.value)
    };
    
    function isAvailableInputHandler(event){
        return updateAvailble(event.target.value)
    };

    function imageInputHandler(event){
        return updateImageUrl(event.target.value)
    };

    function createProductEventHandler(event){
        event.preventDefault();
        let product ={
        pID: 1,
        pName: pName ,
        desc: pDescription,
        isAvailable:Boolean(pAvailable),
        image: pImageUrl,
        price: Number(pPrice)
        }

        updateName("")
        updatePrice("")
        updateDescription("")
        updateAvailble(false)
        updateImageUrl("")

        props.createProduct(product)

    }


    return(
        <form className="row g-4 custom-form" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={pName} 
                    onChange={nameInputHandler}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    value={pDescription}
                    onChange={descriptionInputHandler}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" 
            checked={pAvailable}
            onChange={isAvailableInputHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"
            value={pImageUrl} 
            onChange={imageInputHandler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    )
}

export default ProductForm