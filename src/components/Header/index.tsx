import React from 'react';

import Cart from '../Cart';
import { SearchProps } from '../Search';

import { LogoTitle, MaxContentSizeWrapper } from '../../styles/constants';

import { Container } from './styles';

interface HeaderProps {
  SearchComponent?: React.ReactElement<SearchProps>;
}

const Header: React.FC<HeaderProps> = ({ SearchComponent }) => {
  return (
    <Container>
      <MaxContentSizeWrapper className="header__flex-wrapper">
        <div className="header__logo-search-wrapper">
          <LogoTitle>RosaMarket</LogoTitle>

          {SearchComponent && SearchComponent}
        </div>

        <Cart />
      </MaxContentSizeWrapper>
    </Container>
  );
};

export default Header;
