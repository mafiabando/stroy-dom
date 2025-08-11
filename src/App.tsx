import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy';

const App = () => {
  return (
    <ModalProvider>
    <CartProvider>
    <HashRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
    </CartProvider>
    </ModalProvider>
  );
};

export default App;