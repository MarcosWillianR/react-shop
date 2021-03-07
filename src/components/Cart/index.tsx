import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { defaultIconSize } from '../../styles/constants';
import { AppColors } from '../../styles/types';

import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <button type="button">
        <span>100+</span>

        <FiShoppingBag size={defaultIconSize} color={AppColors.MAIN_COLOR} />
      </button>
    </Container>
  );
};

export default Cart;
