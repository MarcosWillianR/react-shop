import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState } from './types';
import { Action, ActionTypes } from './types/action';

const INITIAL_STATE: ICartState = {
  items: [],
  totalAmount: 0,
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        const productAlreadyInCart = draft.items.find(
          ({ product: { id: cartItemId } }) => cartItemId === product.id,
        );

        if (!productAlreadyInCart) {
          draft.items.push({ product, quantity: 1 });
        }

        return draft;
      }
      case ActionTypes.decreaseCartProduct: {
        const { productId } = action.payload;

        draft.items = draft.items.map(({ product, quantity }) => {
          if (product.id === productId) {
            return { product, quantity: quantity - 1 };
          }

          return { product, quantity };
        });

        return draft;
      }
      case ActionTypes.increaseCartProduct: {
        const { productId } = action.payload;

        draft.items = draft.items.map(({ product, quantity }) => {
          if (product.id === productId) {
            return { product, quantity: quantity + 1 };
          }

          return { product, quantity };
        });

        return draft;
      }
      case ActionTypes.removeProductFromCart: {
        const { productId } = action.payload;

        draft.items = draft.items.filter(
          ({ product: { id: cartProductId } }) => cartProductId !== productId,
        );

        return draft;
      }
      case ActionTypes.calcCartTotalValue: {
        const totalValue = draft.items.reduce((acc, { product, quantity }) => {
          acc += product.price * quantity;

          return acc;
        }, 0);

        draft.totalAmount = totalValue;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
