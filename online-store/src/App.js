import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Products from './component/Products/Products';
import Product from './component/Products/Product';
import Cart from './component/Cart/Cart';
import {QueryClientProvider, QueryClient} from 'react-query';
import Checkout from './component/CheckOut/Checkout';

const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
   <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/products" element={ <Products />}/>
          <Route path="/products/:id" element={ <Product/>}/>
          <Route path="/cart" element={ <Cart/>}/>
          <Route path="/checkout" element={ <Checkout/>}/>
     </Routes>
     </Router>
     </QueryClientProvider>
    </div>
  );
}

export default App;
