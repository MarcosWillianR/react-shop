import styled from 'styled-components';

import { AppColors, FontWeights } from '../../styles/types';
import { fontSizes } from '../../styles/constants';

interface ContainerProps {
  isVisible: boolean;
}

interface SubQuantityButtonProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;

  background: ${AppColors.MODAL_BACKGROUND};

  > div {
    width: 100%;
    max-width: 494px;
    display: grid;
    grid-template-columns: 143px 276px;
    grid-gap: 40px;
    background: ${AppColors.WHITE_COLOR};
    padding: 32px 18px;
    box-shadow: 0px 22px 22px rgba(0, 0, 0, 0.25);
  }
`;

export const ProductItemInfoContent = styled.div`
  div.productItemModal__description {
    margin-bottom: 64px;

    > strong {
      font-size: ${fontSizes.REGULAR};
      font-weight: ${FontWeights.REGULAR};

      &:last-of-type {
        font-size: ${fontSizes.NORMAL};
      }
    }

    p {
      border-top: 1px solid ${AppColors.LIGHT_BACKGROUND};
      border-bottom: 1px solid ${AppColors.LIGHT_BACKGROUND};
      margin: 8px 0;
      padding: 8px 0;

      font-size: ${fontSizes.XSMALL};
      strong {
        font-weight: ${FontWeights.NORMAL};
      }
    }
  }
`;

export const ProductItemChangeQuantityContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .productItemModal__changeQuantityValue {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: ${AppColors.LIGHT_MAIN_COLOR};
    padding: 0 8px;
    margin-left: auto;

    strong {
      color: ${AppColors.MAIN_COLOR};
      font-size: ${fontSizes.NORMAL};
      font-weight: ${FontWeights.REGULAR};
    }
  }

  .productItemModal__changeQuantity {
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
`;

export const SubQuantityButton = styled.button<SubQuantityButtonProps>`
  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;
