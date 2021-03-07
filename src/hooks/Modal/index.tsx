import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from 'react';

import { IProduct } from '../../store/modules/cart/types';

export interface InfoModalData {
  title?: string;
  description: string;
  infoStatus: 'success' | 'error' | 'warning';
  successCallback?(): void;
  warningCallback?(): void;
}

interface ModalContextData {
  showProductItemModal(product: Omit<IProduct, 'quantity'>): void;
  closeProductItemModal(): void;
  productItemModalIsVisible: boolean;
  productItemModalData: Omit<IProduct, 'quantity'> | null;
  showInfoModal(infoData: InfoModalData): void;
  closeInfoModal(): void;
  infoModalIsVisible: boolean;
  infoModalData: InfoModalData | null;
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

  const [infoModalIsVisible, setInfoModalIsVisible] = useState(false);
  const [infoModalData, setInfoModalData] = useState<InfoModalData | null>(
    null,
  );

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

  const closeInfoModal = useCallback(() => {
    setInfoModalIsVisible(false);
    setInfoModalData(null);
  }, []);

  const showInfoModal = useCallback(
    (infoData: InfoModalData) => {
      if (infoModalIsVisible) {
        closeInfoModal();
      } else {
        setInfoModalIsVisible(true);
        setInfoModalData(infoData);
      }
    },
    [closeInfoModal, infoModalIsVisible],
  );

  const contextValue = useMemo(
    () => ({
      showProductItemModal,
      closeProductItemModal,
      productItemModalIsVisible,
      productItemModalData,
      showInfoModal,
      closeInfoModal,
      infoModalData,
      infoModalIsVisible,
    }),
    [
      showProductItemModal,
      closeProductItemModal,
      productItemModalIsVisible,
      productItemModalData,
      showInfoModal,
      closeInfoModal,
      infoModalData,
      infoModalIsVisible,
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
