import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Products from './component/Products/Products';
import Product from './component/Products/Product';

function App() {
  return (
    <div className="App">
   <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="products" element={ <Products/>}/>
          <Route path="products/:id" element={ <Product/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
