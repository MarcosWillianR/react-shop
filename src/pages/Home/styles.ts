import styled from 'styled-components';

import { DefaultBoxShadow, fontSizes } from '../../styles/constants';
import { AppColors, FontWeights } from '../../styles/types';

export const Container = styled.div``;

export const BannerContent = styled.div`
  margin: 32px 0;

  img {
    box-shadow: ${DefaultBoxShadow};
  }
`;

export const AvailableCategoriesContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CategorySelectButton = styled.button`
  width: 80px;
  height: 80px;
  border: 0;
  border-radius: 40px;
  box-shadow: ${DefaultBoxShadow};
  background: ${AppColors.LIGHT_MAIN_COLOR};

  position: relative;

  margin-right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  span,
  img {
    transition: all 0.347s linear;
  }

  img {
    width: 44px;
    height: 44px;
    opacity: 1;
  }

  > span {
    opacity: 0;
    position: absolute;
    color: ${AppColors.MAIN_COLOR};
    font-size: ${fontSizes.NORMAL};
    font-weight: ${FontWeights.NORMAL};
  }

  &:hover {
    img {
      opacity: 0.25;
    }

    span {
      opacity: 1;
    }
  }
`;

export const ProductList = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 319px);
  grid-gap: 32px;
  margin: 32px 0;
`;

export const ProductListItem = styled.button`
  background: ${AppColors.WHITE_COLOR};
  border: 1px solid ${AppColors.LIGHT_BACKGROUND};
  height: 120px;
  padding: 18px;

  display: grid;
  align-items: center;
  grid-template-columns: 88px 1fr;
  grid-gap: 8px;
  text-align: left;

  position: relative;

  > div,
  > span:last-of-type {
    transition: opacity 0.443s linear;
  }

  > span:last-of-type {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${AppColors.MAIN_COLOR};
    font-size: ${fontSizes.NORMAL};
    font-weight: ${FontWeights.NORMAL};
  }

  > div:first-of-type {
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

  &:hover {
    > div {
      opacity: 0.25;
    }

    > span:last-of-type {
      opacity: 1;
    }
  }
`;

export const ProductInfo = styled.div`
  align-self: flex-start;

  > strong {
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
    margin: 4px 0;

    span {
      width: 20px;
      height: 20px;
      background: ${AppColors.LIGHT_MAIN_COLOR};
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 12px;
        height: 12px;
      }
    }

    p {
      font-size: ${fontSizes.XSMALL};
      margin-left: 4px;
    }
  }
`;
