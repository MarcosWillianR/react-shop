import styled, { css } from 'styled-components';

import { AppColors, FontWeights } from '../../styles/types';
import { fontSizes } from '../../styles/constants';

interface ContainerProps {
  size: 'normal' | 'medium';
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  max-width: 319px;
  height: 35px;

  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${AppColors.MAIN_COLOR};
  color: ${AppColors.WHITE_COLOR};

  font-size: ${fontSizes.XSMALL};
  font-weight: ${FontWeights.REGULAR};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      height: 48px;
      font-size: ${fontSizes.LARGE};
    `};
`;
