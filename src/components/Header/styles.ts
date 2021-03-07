import styled from 'styled-components';

import { AppColors } from '../../styles/types';
import { defaultContainerHorizontalPadding } from '../../styles/constants';

export const Container = styled.div`
  background: ${AppColors.LIGHT_BACKGROUND};
  border-bottom: 1px solid ${AppColors.MAIN_COLOR};

  height: 70px;

  padding-left: ${defaultContainerHorizontalPadding};
  padding-right: ${defaultContainerHorizontalPadding};

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

    > span {
      margin-right: 32px;
    }
  }
`;
