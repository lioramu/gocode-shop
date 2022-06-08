
import Product from '../Product/Product';
import './Products.css';

const Products = ({product}) => {
    
    return ( 
    <section className="products">
 {
 product.map(({id, price, title, image})=>{

return  <Product key={id} title={title} price={price} image={image} />;
 })}         
  </section>
  );
 };

 export default Products;
