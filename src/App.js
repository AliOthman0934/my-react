import React,{useState} from "react";
import "./app.css";
import ProductList from "./components/productsList/productList";
import CreateProduct from "./components/createProduct/createProduct";
import FilterProduct from "./components/filterProduct/filterProduct";

const products = [
    {
        pID: 1,
        pName: 'Fresh Milk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: '/images/fresh-milk.png',
        price: 14
    },
    {
        pID: 2,
        pName: 'Cottage Cheese',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "/images/cottage-cheese.png",
        price: 10
    },
    {
        pID: 3,
        pName: 'Brocoli',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "/images/brocoli.png",
        price: 15
    },
    {
        pID: 4,
        pName: 'oranges',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "/images/oranges.png",
        price: 20
    },
    {
        pID: 5,
        pName: 'Olive oil',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "/images/olive-oil.png",
        price: 14
    },
    {
        pID: 6,
        pName: 'Olive oil Test',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
]


function App() {
    let [newProduct,updateNewProduct] = useState(products);
    let[filterTextValue,updateFilterText] = useState("all");

    let filterProductList = newProduct.filter((product)=>{
        if(filterTextValue === "available"){
            return product.isAvailable === true
        } else if(filterTextValue === "unavailable"){
            return product.isAvailable === false
        } else{
            return product
        }
    })
    

    function createProductData(product) {
        product.pID = newProduct.length + 1;
        updateNewProduct([product,...newProduct])
    }

    function slectedProductValue(filteredValue){
        updateFilterText(filteredValue)

    }
    return (<div className="row">
                <div className="col-lg-8 mx-auto">
                    <CreateProduct createProduct={createProductData}></CreateProduct>
                    <FilterProduct fiterProductSelected={slectedProductValue}></FilterProduct>
                    <ProductList newProduct={filterProductList}></ProductList>
                </div>    
            </div>
    )
}

export default App;