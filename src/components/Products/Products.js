
import Product from '../Product/Product';
import './Products.css';

const Products = ({products}) => {
    
    return ( <section className="products">
 {products.map(({id, price, title, image})=>{

return  <Product key={id} title={title} price={price} image={image}/>;
 })}         
  </section>
  );
 };

 export default Products;
