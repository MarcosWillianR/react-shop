import styled from 'styled-components';

import { AppColors, FontWeights } from '../../styles/types';
import { fontSizes } from '../../styles/constants';

export const Container = styled.div`
  min-height: 100vh;

  .cart__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

export const CartProductList = styled.div`
  display: grid;
  grid-template-columns: 420px;
  grid-gap: 32px;
`;

export const CartProductItem = styled.div`
  background: ${AppColors.WHITE_COLOR};
  border: 1px solid ${AppColors.LIGHT_BACKGROUND};
  position: relative;

  .cart__productItem--categoryType {
    width: 24px;
    height: 24px;
    border-radius: 10px;
    border: 1px solid ${AppColors.LIGHT_BACKGROUND};
    background: ${AppColors.LIGHT_MAIN_COLOR};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -10px;
    left: -10px;

    img {
      width: 14px;
      height: 14px;
    }
  }

  height: 120px;
  padding: 18px;

  display: grid;
  align-items: center;
  grid-template-columns: 88px 1fr;
  grid-gap: 8px;
  text-align: left;

  .cart__productItem--image {
    border-right: 1px solid ${AppColors.LIGHT_BACKGROUND};
    height: 80px;
    width: 88px;
    padding-right: 8px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 40px;
    }
  }
`;

export const CartProductInfo = styled.div`
  align-self: flex-start;

  strong {
    font-weight: ${FontWeights.REGULAR};
    font-size: ${fontSizes.XSMALL};
    display: block;

    &:first-of-type {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 20px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: ${fontSizes.REGULAR};
    }
  }

  > div {
    display: flex;
    align-items: center;
    margin: 8px 0;

    .cart__productItem--TotalValue {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: ${AppColors.LIGHT_MAIN_COLOR};
      color: ${AppColors.MAIN_COLOR};
      font-size: ${fontSizes.NORMAL};
      padding: 0 8px;
      margin-left: auto;
    }

    .cart__productItem--changeQuantity {
      min-width: 98px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid ${AppColors.LIGHT_BACKGROUND};
      padding: 0 8px;
      margin-right: 18px;

      button {
        border: 0;
        background: 0;
        display: flex;
        align-items: center;

        &:first-of-type {
          margin-right: 2px;
        }

        &:last-of-type {
          margin-left: 2px;
        }
      }

      span {
        font-size: ${fontSizes.NORMAL};
      }
    }
  }
`;

export const CartFinishPaymentContent = styled.div`
  max-width: 319px;

  .cart__finishPayment--TotalItem {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span,
    strong {
      font-size: ${fontSizes.LARGE};
      font-weight: ${FontWeights.REGULAR};
    }
  }

  .cart__finishPayment--TimeoutItem {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 18px 0;
    padding-bottom: 18px;

    border-bottom: 1px solid ${AppColors.LIGHT_BACKGROUND};

    span,
    strong {
      font-size: ${fontSizes.NORMAL};
      font-weight: ${FontWeights.REGULAR};
    }
  }

  .cart__finishPayment--InfoItem {
    margin-bottom: 18px;
    height: 86px;
    display: flex;
    align-items: center;
    background: ${AppColors.LIGHT_BACKGROUND};

    p {
      max-width: 312px;
      text-align: center;
      font-size: ${fontSizes.XSMALL};
    }
  }
`;
