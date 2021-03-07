import styled from 'styled-components';

import { AppColors } from '../../styles/types';
import { DefaultBoxShadow } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;

  background: ${AppColors.WHITE_COLOR};

  padding: 8px;

  box-shadow: ${DefaultBoxShadow};
  border-radius: 4px;

  input {
    width: 100%;
    margin-left: 8px;
    border: 0;

    &::placeholder {
      color: ${AppColors.PLACEHOLDER_TEXT_COLOR};
    }
  }
`;
