import React, { useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
  MaxContentSizeWrapper,
  LogoTitle,
  defaultIconSize,
} from '../../styles/constants';
import { AppColors } from '../../styles/types';

import { Container } from './styles';

const Footer: React.FC = () => {
  const history = useHistory();

  const handleSmoothScrollTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    [],
  );

  return (
    <Container>
      <MaxContentSizeWrapper>
        <div className="footer__alignment-wrapper">
          <div className="footer__title-info--wrapper">
            <LogoTitle onClick={() => history.push('/')}>RosaMarket</LogoTitle>

            <div>
              <small>© Copyright 2021 - RosaMarket</small>
              <small>Mercado online ficticio criado por Marcos Willian</small>
            </div>
          </div>

          <button type="button" onClick={handleSmoothScrollTop}>
            <FiArrowUp size={defaultIconSize} color={AppColors.WHITE_COLOR} />
          </button>
        </div>
      </MaxContentSizeWrapper>
    </Container>
  );
};

export default Footer;
