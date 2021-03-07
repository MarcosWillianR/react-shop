import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Button from '../../components/Button';

import { IState } from '../../store';
import { ICartState } from '../../store/modules/cart/types';
import {
  calcCartTotalValue,
  increaseCartProduct,
  decreaseCartProduct,
  removeProductFromCart,
  clearCart,
} from '../../store/modules/cart/actions';

import { priceFormatter, getDateDifference } from '../../utils';

import { MaxContentSizeWrapper, defaultIconSize } from '../../styles/constants';
import { AppColors } from '../../styles/types';

import {
  Container,
  CartProductList,
  CartProductItem,
  CartProductInfo,
  CartFinishPaymentContent,
} from './styles';

interface ChangeProductQuantityProps {
  productId: number;
  type: 'add' | 'sub';
  currentQuantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { cartTimeout, items, totalAmount } = useSelector<IState, ICartState>(
    state => state.cart,
  );

  const [countdownCart, setCountdownCart] = useState('00:00');

  const handleSearch = useCallback((text: string) => {
    console.log(text);
  }, []);

  const totalProductItemValueFormatted = useCallback(
    (quantity: number, price: number) => priceFormatter(price * quantity),
    [],
  );

  const handleChangeProductQuantity = useCallback(
    ({ type, productId, currentQuantity }: ChangeProductQuantityProps) => {
      if (type === 'add') {
        dispatch(increaseCartProduct(productId));
      } else if (currentQuantity === 1) {
        dispatch(removeProductFromCart(productId));
      } else {
        dispatch(decreaseCartProduct(productId));
      }
    },
    [dispatch],
  );

  const cartTotalValueFormatted = useMemo(() => priceFormatter(totalAmount), [
    totalAmount,
  ]);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(calcCartTotalValue());
    }
  }, [dispatch, items]);

  useEffect(() => {
    let countDownTimeout: NodeJS.Timeout;

    const start = (() => {
      const func = () => {
        const now = new Date();
        const timeToNextSecond = 1000 - (now.getTime() % 1000);

        const { minutes, seconds } = getDateDifference(
          cartTimeout as Date,
          now,
        );

        if (!minutes && !seconds) {
          return dispatch(clearCart());
        }

        const minutesFormatted = String(minutes).padStart(2, '0');
        const secondsFormatted = String(seconds).padStart(2, '0');
        countDownTimeout = setTimeout(func, timeToNextSecond);

        return setCountdownCart(`${minutesFormatted}:${secondsFormatted}`);
      };

      return func;
    })();

    if (cartTimeout) {
      start();
    } else {
      setCountdownCart('00:00');
    }

    return () => clearTimeout(countDownTimeout);
  }, [cartTimeout, dispatch]);

  return (
    <Container>
      <Header SearchComponent={<Search onSearch={handleSearch} />} />

      <MaxContentSizeWrapper>
        <div className="cart__wrapper">
          <CartProductList>
            {items.map(cartProduct => {
              const {
                image,
                name,
                icon,
                iconName,
                id,
                quantity,
                price,
              } = cartProduct;

              return (
                <CartProductItem key={id}>
                  <div className="cart__productItem--categoryType">
                    <img src={icon} alt={`Categorias - ${iconName}`} />
                  </div>

                  <div className="cart__productItem--image">
                    <img src={image} alt={name} />
                  </div>

                  <CartProductInfo>
                    <strong>{name}</strong>

                    <div>
                      <div className="cart__productItem--changeQuantity">
                        <button
                          type="button"
                          onClick={() =>
                            handleChangeProductQuantity({
                              productId: id,
                              type: 'sub',
                              currentQuantity: quantity,
                            })
                          }
                        >
                          <FiMinus
                            size={defaultIconSize}
                            color={AppColors.MAIN_COLOR}
                          />
                        </button>

                        <span>{quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            handleChangeProductQuantity({
                              productId: id,
                              type: 'add',
                              currentQuantity: quantity,
                            })
                          }
                        >
                          <FiPlus
                            size={defaultIconSize}
                            color={AppColors.MAIN_COLOR}
                          />
                        </button>
                      </div>

                      <div className="cart__productItem--TotalValue">
                        <strong>
                          {totalProductItemValueFormatted(quantity, price)}
                        </strong>
                      </div>
                    </div>
                  </CartProductInfo>
                </CartProductItem>
              );
            })}
          </CartProductList>

          <CartFinishPaymentContent>
            <div className="cart__finishPayment--TotalItem">
              <span>Total:</span>
              <strong>{cartTotalValueFormatted}</strong>
            </div>

            <div className="cart__finishPayment--TimeoutItem">
              <span>Tempo restante:</span>
              <strong>{countdownCart} min</strong>
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
