export interface IProduct {
  id: number;
  name: string;
  idCategory: number;
  description: string;
  image: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}
