import { Reducer } from 'redux';
import produce from 'immer';
import { addMinutes } from 'date-fns';

import { ICartState } from './types';
import { Action, ActionTypes } from './types/action';

const INITIAL_STATE: ICartState = {
  items: [],
  totalAmount: 0,
  cartTimeout: null,
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        if (!draft.items.length && !draft.cartTimeout) {
          draft.cartTimeout = addMinutes(new Date(), 15);
        }

        const productAlreadyInCartIndex = draft.items.findIndex(
          ({ id: cartItemId }) => cartItemId === product.id,
        );

        if (productAlreadyInCartIndex === -1) {
          draft.items.push(product);
        } else {
          draft.items[productAlreadyInCartIndex].quantity += product.quantity;
        }

        return draft;
      }
      case ActionTypes.decreaseCartProduct: {
        const { productId } = action.payload;

        draft.items = draft.items.map(product => {
          if (product.id === productId) {
            return { ...product, quantity: product.quantity - 1 };
          }

          return product;
        });

        return draft;
      }
      case ActionTypes.increaseCartProduct: {
        const { productId } = action.payload;

        draft.items = draft.items.map(product => {
          if (product.id === productId) {
            return { ...product, quantity: product.quantity + 1 };
          }

          return product;
        });

        return draft;
      }
      case ActionTypes.removeProductFromCart: {
        const { productId } = action.payload;

        draft.items = draft.items.filter(
          ({ id: cartProductId }) => cartProductId !== productId,
        );

        if (!draft.items.length) {
          draft.totalAmount = 0;

          if (draft.cartTimeout) {
            draft.cartTimeout = null;
          }
        }

        return draft;
      }
      case ActionTypes.calcCartTotalValue: {
        const totalValue = draft.items.reduce((acc, { price, quantity }) => {
          acc += price * quantity;

          return acc;
        }, 0);

        draft.totalAmount = totalValue;

        return draft;
      }
      case ActionTypes.clearCart: {
        draft.cartTimeout = null;
        draft.items = [];
        draft.totalAmount = 0;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
