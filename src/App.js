import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import productsList from './Data';
function App() {
  return (
      <>
      <Header  />
      <Products products={productsList}/>
      </>
  );
};

export default App;
