import React,{useState} from "react";
import "./app.css";
import ProductList from "./components/productsList/productList";
import CreateProduct from "./components/createProduct/createProduct";

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
    let [newProduct,updateNewProduct] = useState(products)

    function createProductData(product) {
        updateNewProduct([product,...newProduct])
    }
    return (
        <div>
            <CreateProduct createProduct={createProductData}></CreateProduct>
            <ProductList newProduct={newProduct}></ProductList>
        </div>
    )
}

export default App;