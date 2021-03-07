import React from 'react';
import { useHistory } from 'react-router-dom';

import Cart from '../Cart';
import { SearchProps } from '../Search';

import { LogoTitle, MaxContentSizeWrapper } from '../../styles/constants';

import { Container } from './styles';

interface HeaderProps {
  SearchComponent?: React.ReactElement<SearchProps>;
}

const Header: React.FC<HeaderProps> = ({ SearchComponent }) => {
  const history = useHistory();

  return (
    <div style={{ marginBottom: 102 }}>
      <Container>
        <MaxContentSizeWrapper className="header__flex-wrapper">
          <div className="header__logo-search-wrapper">
            <LogoTitle onClick={() => history.push('/')}>RosaMarket</LogoTitle>

            {SearchComponent && SearchComponent}
          </div>

          <Cart />
        </MaxContentSizeWrapper>
      </Container>
    </div>
  );
};

export default Header;
