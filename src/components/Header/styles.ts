import styled from 'styled-components';

import { AppColors } from '../../styles/types';

export const Container = styled.div`
  background: ${AppColors.LIGHT_BACKGROUND};
  border-bottom: 1px solid ${AppColors.MAIN_COLOR};

  height: 70px;

  min-width: 865px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;

  .header__flex-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .header__logo-search-wrapper {
    flex: 1;
    display: flex;
    align-items: center;

    > button {
      margin-right: 32px;
    }
  }
`;
