import { CategoryType } from '../../../../pages/Home/types';

export interface IProduct {
  id: number;
  idCategory: CategoryType;
  name: string;
  description: string;
  price: number;
  image: string;
  priceFormatted: string;
  icon: string;
  iconName: string;
  quantity: number;
}

export interface ICartState {
  items: IProduct[];
  totalAmount: number;
  cartTimeout: Date | null;
}
