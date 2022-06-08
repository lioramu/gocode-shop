import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductsList from './Data';
import { useState } from "react";

function App() {
const [products,setProducts]= useState(ProductsList);

const categories = ProductsList.map(p => p.category)
  .filter((value, index, array) => array.indexOf(value)===index);

function filterProducts (category) {
 setProducts(ProductsList.filter((product)=>
   category==="all" ? product : product.category ===category))
  }
  return (
      <>
      <Header categories={categories} filterProducts={filterProducts} /> 
      <Products product={products}/> 
      </>
  );
};
export default App;
