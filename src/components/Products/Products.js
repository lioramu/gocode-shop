
import Product from '../Product/Product';
import './Products.css';

const Products = ({product}) => {
    
    return ( 
    <section className="products">
 {product.length > 0 ?
 product.map(({id, price, title, image})=>{

return <Product key={id} title={title} price={price} image={image} />;
 }) : <div class="spinner-examples">
 <div class="example">
   <span class="smooth spinner" />
 </div>
</div> }  
  </section>
  );
 };

 export default Products;
