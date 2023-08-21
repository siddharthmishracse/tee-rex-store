import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems ] = useState([]);

  const url = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  useEffect(() => {
    getData();
  },[]);
  

  const getData = () => {
    axios.get(url).then((response) =>{
      setProducts(response.data.map((item) => ({...item, isAddedToCart: false})));
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const updateProduct = (item) => {
    const updatedProducts = products.map(product => {
       if(product.id === item.id) {
         return {...product, isAddedToCart: true}
       }
       return product;
     })
     setProducts(updatedProducts);
     console.log(products);
     const cartItemToAdd = cartItems;
     cartItemToAdd.push({...item, isAddedToCart: true , quant: 1});
    setCartItems(cartItemToAdd);
   } 

   console.log("Products",products);
   console.log("CartItems",cartItems);

   const quantityDecrement = (decrementItem) => {
    const exist = cartItems.find((cartItem) => cartItem.id === decrementItem.id);
      if(exist.quant === 1){
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== decrementItem.id));
        setProducts(products.map(product => {
          if(product.id === decrementItem.id) {
            return {...product, isAddedToCart: false}
          }
          return product;
        }))
      }else{
        setCartItems(cartItems.map((cartItem) => cartItem.id === decrementItem.id ? {...exist, quant: exist.quant - 1} : cartItem))
      }
   };

   const quantityIncrement = (incrementItem) => {
    const exist = cartItems.find((cartItem) => cartItem.id === incrementItem.id);
      if(exist.quant < exist.quantity){
        setCartItems(cartItems.map((cartItem) => cartItem.id === incrementItem.id ? {...exist, quant: exist.quant + 1} : cartItem))
      }else{
        alert("Cant add more");
      }
   };

   const removeCartItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setProducts(products.map(product => {
       if(product.id === item.id) {
         return {...product, isAddedToCart: false}
       }
       return product;
     }))
   };
 
  return (
    <div className="App">
      <Router>
          <Navbar countCartItems={cartItems.length} />
          <Routes>
            <Route exact path="/" element={<Home  products = {products} updateProduct = {updateProduct}/>} />
            <Route exact path="/cart" element={<Cart cartItems={cartItems} quantityDecrement={quantityDecrement} quantityIncrement={quantityIncrement} removeCartItem={removeCartItem}/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
