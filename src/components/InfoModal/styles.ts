import styled from 'styled-components';

import { AppColors, FontWeights } from '../../styles/types';
import { fontSizes } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;

  background: ${AppColors.MODAL_BACKGROUND};

  .infoModal__content {
    width: 100%;
    max-width: 494px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${AppColors.WHITE_COLOR};
    padding: 32px 18px;
    box-shadow: 0px 22px 22px rgba(0, 0, 0, 0.25);

    strong {
      font-weight: ${FontWeights.NORMAL};
      font-size: ${fontSizes.MEDIUM};
      margin: 32px 0 8px 0;
    }

    p {
      font-size: ${fontSizes.XSMALL};
      margin-bottom: 32px;
      text-align: center;
    }
  }
`;
