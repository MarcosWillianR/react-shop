import styled from 'styled-components';

import { fontSizes } from '../../styles/constants';
import { AppColors } from '../../styles/types';

export const Container = styled.footer`
  width: 100%;
  height: 70px;
  background: ${AppColors.LIGHT_MAIN_COLOR};
  margin-top: 69px;

  .footer__alignment-wrapper {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__title-info--wrapper {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;
      margin-left: 18px;

      > small {
        font-size: ${fontSizes.XXSMALL};
      }
    }
  }

  button {
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background: ${AppColors.MAIN_COLOR};
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
