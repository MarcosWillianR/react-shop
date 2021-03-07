import { differenceInMinutes, differenceInSeconds } from 'date-fns';

import { GetDateDifferenceResponse } from './types';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

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

export { priceFormatter, getDateDifference, modalRoot };
