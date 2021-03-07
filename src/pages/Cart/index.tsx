import React, { useCallback } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Button from '../../components/Button';
// import Footer from '../../components/Footer';

import { MaxContentSizeWrapper, defaultIconSize } from '../../styles/constants';
import { AppColors } from '../../styles/types';

import {
  Container,
  CartProductList,
  CartProductItem,
  CartProductInfo,
  CartFinishPaymentContent,
} from './styles';

const Cart: React.FC = () => {
  const handleSearch = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <Container>
      <Header SearchComponent={<Search onSearch={handleSearch} />} />

      <MaxContentSizeWrapper>
        <div className="cart__wrapper">
          <CartProductList>
            <CartProductItem>
              <div>
                <img
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/191784-1200-auto"
                  alt="Refri sukita"
                />
              </div>

              <CartProductInfo>
                <strong>Refrigerante Sukita Laranja 350ml</strong>

                <div>
                  <div className="cart__productItem--changeQuantity">
                    <button type="button">
                      <FiPlus
                        size={defaultIconSize}
                        color={AppColors.MAIN_COLOR}
                      />
                    </button>

                    <span>111150</span>

                    <button type="button">
                      <FiMinus
                        size={defaultIconSize}
                        color={AppColors.MAIN_COLOR}
                      />
                    </button>
                  </div>

                  <div className="cart__productItem--TotalValue">
                    <strong>R$ 135,70</strong>
                  </div>
                </div>
              </CartProductInfo>
            </CartProductItem>
          </CartProductList>

          <CartFinishPaymentContent>
            <div className="cart__finishPayment--TotalItem">
              <span>Total:</span>
              <strong>R$ 1.535,45</strong>
            </div>

            <div className="cart__finishPayment--TimeoutItem">
              <span>Tempo restante:</span>
              <strong>09:54:34 min</strong>
            </div>

            <div className="cart__finishPayment--InfoItem">
              <p>
                Todos os nossos entregadores seguem as orientações da OMS para
                prevenção contra a COVID-19, além de também, utilizar sacolas
                descartáveis.
              </p>
            </div>

            <Button size="medium">Finalizar compra</Button>
          </CartFinishPaymentContent>
        </div>
      </MaxContentSizeWrapper>
    </Container>
  );
};

export default Cart;
