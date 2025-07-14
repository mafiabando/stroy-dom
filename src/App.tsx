import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';

const App = () => {
  return (
    <ModalProvider>
    <CartProvider>
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </ModalProvider>
  );
};

export default App;