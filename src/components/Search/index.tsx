import React, { useCallback, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { AppColors } from '../../styles/types';
import { defaultIconSize } from '../../styles/constants';

import { Container } from './styles';

export interface SearchProps {
  onSearch(text: string): void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      onSearch(e.currentTarget.value);
    },
    [onSearch],
  );

  return (
    <Container>
      <FiSearch size={defaultIconSize} color={AppColors.MAIN_COLOR} />

      <input
        placeholder="Busque por produto ou categoria"
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default Search;
