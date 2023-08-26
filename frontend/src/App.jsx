import './App.css'
import CartPage from './pages/Cart';
import Home from './pages/Home';
import Layout from './pages/Layout'
import ProductDetail from './pages/ProductDetail';


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/product/:id" element={ProductDetail} />
        <Route path="/cart" element={CartPage} />
      </Routes>
    </div>

  );
}

export default App