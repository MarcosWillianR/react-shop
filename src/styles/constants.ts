import styled from 'styled-components';

import { FontSizes, FontWeights, AppColors } from './types';

const calcFontRemValue = (fontSize: number) => fontSize / 16;

const fontSizes: FontSizes = {
  XXXSMALL: `${calcFontRemValue(8)}rem` as '0.5rem',
  XXSMALL: `${calcFontRemValue(10)}rem` as '0.625rem',
  XSMALL: `${calcFontRemValue(12)}rem` as '0.75rem',
  NORMAL: `${calcFontRemValue(14)}rem` as '0.875rem',
  REGULAR: `${calcFontRemValue(16)}rem` as '1rem',
  MEDIUM: `${calcFontRemValue(18)}rem` as '1.125rem',
  LARGE: `${calcFontRemValue(24)}rem` as '1.5rem',
};

const MaxContentSizeWrapper = styled.div`
  width: 100%;
  max-width: 1056px;
  margin: 0 auto;
  padding: 0 18px;
`;

const LogoTitle = styled.button`
  font-size: ${fontSizes.MEDIUM};
  font-weight: ${FontWeights.BOLD};
  color: ${AppColors.MAIN_COLOR};
  border: 0;
  background: 0;
`;

const DefaultBoxShadow = '1px 1px 2px rgba(0, 0, 0, 0.15)';

const defaultIconSize = 24;

export {
  fontSizes,
  MaxContentSizeWrapper,
  LogoTitle,
  DefaultBoxShadow,
  defaultIconSize,
};
