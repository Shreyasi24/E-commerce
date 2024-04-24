import './App.css';
import Header from "./component/Header"
import Footer from './component/Footer';
import ProductDetails from './component/ProductDetails/ProductDetails';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Cart from './Cart/Cart';

function App() {
  const [products, setProducts]=useState([])
  useEffect(() => {
    const fetchProduct=async()=>{
    const res=await fetch('https://fakestoreapi.com/products?limit=8');
    const data=await res.json()
    //console.log(data,"pp")
    setProducts(data)
    }
    fetchProduct()
  }, [])
  
  return (
    <div className="App">
    {
      products ?
      <BrowserRouter>
   
      <Header/>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="/*" element={<div>404 not found</div>}/>
      </Routes>
      <Footer/>
 
    </BrowserRouter>
    :
    <>Loading...</>
    }
       </div>
  );
}

export default App;
