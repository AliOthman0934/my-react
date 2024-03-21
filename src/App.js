import React,{useState} from "react";
import "./app.css";
import ProductList from "./components/productsList/productList";
import CreateProduct from "./components/createProduct/createProduct";


function App() {
    let [newProduct,updateProduct] = useState(null)
    function createProductData(product) {
        updateProduct(product)
    }
    return (
        <div>
            <CreateProduct createProduct={createProductData}></CreateProduct>
            <ProductList newProduct={newProduct}></ProductList>
        </div>
    )
}

export default App;