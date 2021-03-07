import React, { useMemo } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { IState } from '../../store';

import { defaultIconSize } from '../../styles/constants';
import { AppColors } from '../../styles/types';

import { Container } from './styles';

const Cart: React.FC = () => {
  const history = useHistory();
  const cartItems = useSelector<IState, IProduct[]>(state => state.cart.items);

  const cartItemsQuantity = useMemo(() => {
    if (cartItems.length > 0) {
      const quantityItems = cartItems.reduce((acc, { quantity }) => {
        acc += quantity;

        return acc;
      }, 0);

      if (quantityItems > 100) {
        return '100+';
      }

      return String(quantityItems);
    }

    return '';
  }, [cartItems]);

  return (
    <Container>
      <button type="button" onClick={() => history.push('cart')}>
        {!!cartItemsQuantity && <span>{cartItemsQuantity}</span>}

        <FiShoppingBag size={defaultIconSize} color={AppColors.MAIN_COLOR} />
      </button>
    </Container>
  );
};

export default Cart;
