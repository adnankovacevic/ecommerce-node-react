import { Route, Routes } from 'react-router-dom';
import './App.css'
import CartPage from './pages/Cart';
import Home from './pages/Home';
import Layout from './pages/Layout'
import LoginPage from './pages/auth/Login';
import RegistrationPage from './pages/auth/Registration';


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* <Route path="/product/:id" element={ProductDetail} />
        <Route path="/cart" element={CartPage} /> */}
      </Routes>
    </div>

  );
}

export default App