import { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
  selectedProductId: string | null;
  openProductModal: (id: string) => void;
  closeProductModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const openProductModal = (id: string) => {
    setSelectedProductId(id);
  };

  const closeProductModal = () => {
    setSelectedProductId(null);
  };

  return (
    <ModalContext.Provider value={{ selectedProductId, openProductModal, closeProductModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};