import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
//import ProductsList from './Data';
import { useEffect, useState } from "react";  

function App() {
const [products,setProducts]= useState([]);
const [listProducts,setlistProducts]=useState([]);

useEffect(()=>{
   fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((list)=> {setProducts(list); setlistProducts (list)});
},[])

const categories = listProducts.map(p => p.category)
  .filter((value, index, array) => array.indexOf(value)===index);

function filterProducts (category) {
  setProducts(listProducts.filter((product)=>
   category==="all" ? product : product.category ===category));
  
  }
  return (

      <>
      <Header 
       categories={categories} 
       filterProducts={filterProducts}
       /> 
      <Products product={products}/> 
      </>
  );
};
export default App;

