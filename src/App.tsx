import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy';
import ProductPage from './pages/Product/ProductPage';

const App = () => {
  return (
    <ModalProvider>
      <CartProvider>
        <HashRouter>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:urlId" element={<ProductPage />} />
                <Route path="/product/:slug" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </CartProvider>
    </ModalProvider>
  );
};

export default App;