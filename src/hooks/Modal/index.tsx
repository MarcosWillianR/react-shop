import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from 'react';

import { IProduct } from '../../store/modules/cart/types';

interface ModalContextData {
  showProductItemModal(product: Omit<IProduct, 'quantity'>): void;
  closeProductItemModal(): void;
  productItemModalIsVisible: boolean;
  productItemModalData: Omit<IProduct, 'quantity'> | null;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [productItemModalIsVisible, setProductItemModalIsVisible] = useState(
    false,
  );
  const [productItemModalData, setProductItemModalData] = useState<Omit<
    IProduct,
    'quantity'
  > | null>(null);

  const closeProductItemModal = useCallback(() => {
    setProductItemModalIsVisible(false);
    setProductItemModalData(null);
  }, []);

  const showProductItemModal = useCallback(
    (product: Omit<IProduct, 'quantity'>) => {
      if (productItemModalIsVisible) {
        closeProductItemModal();
      } else {
        setProductItemModalIsVisible(true);
        setProductItemModalData(product);
      }
    },
    [closeProductItemModal, productItemModalIsVisible],
  );

  const contextValue = useMemo(
    () => ({
      showProductItemModal,
      closeProductItemModal,
      productItemModalIsVisible,
      productItemModalData,
    }),
    [
      showProductItemModal,
      closeProductItemModal,
      productItemModalIsVisible,
      productItemModalData,
    ],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}

export { ModalProvider, useModal };
