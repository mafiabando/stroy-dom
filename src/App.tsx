import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { YMInitializer } from 'react-yandex-metrika';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy';
import { useEffect } from 'react';

const METRIKA_ID = 103535711;

const RouteChangeTracker = () => {
  const location = useLocation();
  const ym = window.ym; // Получаем экземпляр ym из глобальной области видимости

  useEffect(() => {
    if (window.ym) {
      console.log("Яндекс.Метрика (ym) найдена!");
      window.ym(METRIKA_ID, 'hit', location.pathname + location.hash);
    } else {
      console.warn("Яндекс.Метрика (ym) не найдена!");
    }
  }, [location]);

  return null; // Этот компонент ничего не рендерит
};

const App = () => {
  return (
    <ModalProvider>
    <CartProvider>
    <HashRouter> 
      <YMInitializer accounts={[METRIKA_ID]} options={{ 
            clickmap:true, 
            trackLinks:true, 
            accurateTrackBounce:true, 
            webvisor: true,
            trackHash: true // Важно для HashRouter
          }} version="2" />
      <Header />
      <RouteChangeTracker />
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