import { IProduct } from './index';

export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  decreaseCartProduct = 'DECREASE_CART_PRODUCT',
  increaseCartProduct = 'INCREASE_CART_PRODUCT',
  calcCartTotalValue = 'CALC_CART_TOTAL_VALUE',
}

export interface addProductToCartAction {
  type: ActionTypes.addProductToCart;
  payload: {
    product: IProduct;
  };
}

export interface decreaseCartProductAction {
  type: ActionTypes.decreaseCartProduct;
  payload: {
    productId: number;
  };
}

export interface increaseCartProductAction {
  type: ActionTypes.increaseCartProduct;
  payload: {
    productId: number;
  };
}

export interface removeProductFromCartAction {
  type: ActionTypes.removeProductFromCart;
  payload: {
    productId: number;
  };
}

export interface calcCartTotalValueAction {
  type: ActionTypes.calcCartTotalValue;
}

export type Action =
  | addProductToCartAction
  | decreaseCartProductAction
  | increaseCartProductAction
  | removeProductFromCartAction
  | calcCartTotalValueAction;
