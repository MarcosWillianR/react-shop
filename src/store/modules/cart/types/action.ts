import { IProduct } from './index';

export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  decreaseCartProduct = 'DECREASE_CART_PRODUCT',
  increaseCartProduct = 'INCREASE_CART_PRODUCT',
  calcCartTotalValue = 'CALC_CART_TOTAL_VALUE',
  clearCart = 'CLEAR_CART',
}

export interface AddProductToCartAction {
  type: ActionTypes.addProductToCart;
  payload: {
    product: IProduct;
  };
}

export interface DecreaseCartProductAction {
  type: ActionTypes.decreaseCartProduct;
  payload: {
    productId: number;
  };
}

export interface IncreaseCartProductAction {
  type: ActionTypes.increaseCartProduct;
  payload: {
    productId: number;
  };
}

export interface RemoveProductFromCartAction {
  type: ActionTypes.removeProductFromCart;
  payload: {
    productId: number;
  };
}

export interface CalcCartTotalValueAction {
  type: ActionTypes.calcCartTotalValue;
}

export interface ClearCartAction {
  type: ActionTypes.clearCart;
}

export type Action =
  | AddProductToCartAction
  | DecreaseCartProductAction
  | IncreaseCartProductAction
  | RemoveProductFromCartAction
  | CalcCartTotalValueAction
  | ClearCartAction;
