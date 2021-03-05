import { ActionCreator, Action } from 'redux';
import { IProduct } from './types';
import { ActionTypes } from './types/action';

export const addProductToCart: ActionCreator<Action> = (product: IProduct) => {
  return {
    type: ActionTypes.addProductToCart,
    payload: { product },
  };
};

export const decreaseCartProduct: ActionCreator<Action> = (
  productId: number,
) => {
  return {
    type: ActionTypes.decreaseCartProduct,
    payload: { productId },
  };
};

export const increaseCartProduct: ActionCreator<Action> = (
  productId: number,
) => {
  return {
    type: ActionTypes.increaseCartProduct,
    payload: { productId },
  };
};

export const removeProductFromCart: ActionCreator<Action> = (
  productId: number,
) => {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: { productId },
  };
};

export const calcCartTotalValue: ActionCreator<Action> = () => {
  return {
    type: ActionTypes.calcCartTotalValue,
  };
};
