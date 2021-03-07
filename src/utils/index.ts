import { differenceInMinutes, differenceInSeconds } from 'date-fns';

import sodaCup from '../assets/soda-cup.png';
import chocolate from '../assets/chocolate.svg';
import sandwich from '../assets/sandwich.svg';
import allProducts from '../assets/all-products.svg';

import { GetDateDifferenceResponse } from './types';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const iconByType = { 0: allProducts, 1: sodaCup, 2: chocolate, 3: sandwich };
const iconNameByType = { 0: 'Todos', 1: 'Bebidas', 2: 'Doces', 3: 'Salgados' };

const priceFormatter = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const getDateDifference = (
  date: Date,
  today: Date,
): GetDateDifferenceResponse => {
  const minutes = differenceInMinutes(date, today) % 60;
  const seconds = differenceInSeconds(date, today) % 60;

  return { minutes, seconds };
};

let timer: NodeJS.Timeout | null;

const debounce = (callback: () => void, delay: number): void => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    callback();
    timer = null;
  }, delay);
};

export {
  priceFormatter,
  getDateDifference,
  modalRoot,
  iconByType,
  iconNameByType,
  debounce,
};
