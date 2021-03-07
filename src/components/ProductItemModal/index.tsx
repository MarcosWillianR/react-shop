import React, {
  useCallback,
  MouseEvent,
  useState,
  useMemo,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import Button from '../Button';

import { AppColors } from '../../styles/types';
import { defaultIconSize } from '../../styles/constants';

import { useModal } from '../../hooks/Modal';

import { addProductToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import { priceFormatter, modalRoot } from '../../utils';

import {
  Container,
  ProductItemInfoContent,
  ProductItemChangeQuantityContent,
  SubQuantityButton,
} from './styles';

const ProductItemModal: React.FC = () => {
  const { closeProductItemModal, productItemModalData } = useModal();
  const dispatch = useDispatch();

  const [itemQuantity, setItemQuantity] = useState(1);
  const [modalElement] = useState(document.createElement('div'));

  const handleClickOutside = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const modalContainer = document.querySelector('.productItemModal');

      if (modalContainer === event.target) {
        setItemQuantity(1);
        closeProductItemModal();
      }
    },
    [closeProductItemModal],
  );

  const handleUpdateCartQuantity = useCallback((updateType: 'add' | 'sub') => {
    if (updateType === 'add') {
      setItemQuantity(state => state + 1);
    } else {
      setItemQuantity(state => state - 1);
    }
  }, []);

  const handleAddToCart = useCallback(
    (product: Omit<IProduct, 'quantity'>) => {
      dispatch(addProductToCart({ ...product, quantity: itemQuantity }));

      setItemQuantity(1);
      closeProductItemModal();
    },
    [dispatch, itemQuantity, closeProductItemModal],
  );

  const handleFormatValue = useMemo(() => {
    if (productItemModalData) {
      const { price } = productItemModalData;

      const totalPrice = price * itemQuantity;

      return priceFormatter(totalPrice);
    }

    return '';
  }, [itemQuantity, productItemModalData]);

  useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <Container onClick={handleClickOutside} className="productItemModal">
      <div className="productItemModal__content">
        {productItemModalData && (
          <>
            <img
              src={productItemModalData.image}
              alt={productItemModalData.name}
            />
            <ProductItemInfoContent>
              <div className="productItemModal__description">
                <strong>{productItemModalData.name}</strong>

                <p>
                  <strong>Descrição: </strong>
                  {productItemModalData.description}
                </p>

                <strong>{productItemModalData.priceFormatted}</strong>
              </div>

              <ProductItemChangeQuantityContent>
                <div className="productItemModal__changeQuantity">
                  <SubQuantityButton
                    type="button"
                    onClick={() => handleUpdateCartQuantity('sub')}
                    disabled={itemQuantity === 1}
                  >
                    <FiMinus
                      size={defaultIconSize}
                      color={AppColors.MAIN_COLOR}
                    />
                  </SubQuantityButton>

                  <span>{itemQuantity}</span>

                  <button
                    type="button"
                    onClick={() => handleUpdateCartQuantity('add')}
                  >
                    <FiPlus
                      size={defaultIconSize}
                      color={AppColors.MAIN_COLOR}
                    />
                  </button>
                </div>

                <div className="productItemModal__changeQuantityValue">
                  <strong>{handleFormatValue}</strong>
                </div>
              </ProductItemChangeQuantityContent>

              <Button
                onClick={() => handleAddToCart(productItemModalData)}
              >{`Adicionar ${itemQuantity} ao carrinho`}</Button>
            </ProductItemInfoContent>
          </>
        )}
      </div>
    </Container>,
    modalElement,
  );
};

export default ProductItemModal;
