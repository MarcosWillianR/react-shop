import { IProduct } from './types';
import {
  ActionTypes,
  AddProductToCartAction,
  DecreaseCartProductAction,
  IncreaseCartProductAction,
  RemoveProductFromCartAction,
  CalcCartTotalValueAction,
  ClearCart,
} from './types/action';

function addProductToCart(product: IProduct): AddProductToCartAction {
  return {
    type: ActionTypes.addProductToCart,
    payload: { product },
  };
}

function decreaseCartProduct(productId: number): DecreaseCartProductAction {
  return {
    type: ActionTypes.decreaseCartProduct,
    payload: { productId },
  };
}

function increaseCartProduct(productId: number): IncreaseCartProductAction {
  return {
    type: ActionTypes.increaseCartProduct,
    payload: { productId },
  };
}

function removeProductFromCart(productId: number): RemoveProductFromCartAction {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: { productId },
  };
}

function calcCartTotalValue(): CalcCartTotalValueAction {
  return {
    type: ActionTypes.calcCartTotalValue,
  };
}

function clearCart(): ClearCart {
  return {
    type: ActionTypes.clearCart,
  };
}

export {
  addProductToCart,
  decreaseCartProduct,
  increaseCartProduct,
  removeProductFromCart,
  calcCartTotalValue,
  clearCart,
};
