import styled from 'styled-components';

import { fontSizes, DefaultBoxShadow } from '../../styles/constants';
import { AppColors } from '../../styles/types';

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;

    border: 0;
    background: 0;

    position: relative;

    span {
      position: absolute;
      top: -5px;
      right: -5px;

      width: 24px;
      height: 14px;
      color: ${AppColors.MAIN_COLOR};
      background: ${AppColors.LIGHT_MAIN_COLOR};
      font-size: ${fontSizes.XXXSMALL};
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: ${DefaultBoxShadow};
      border-radius: 25px;
    }
  }
`;
