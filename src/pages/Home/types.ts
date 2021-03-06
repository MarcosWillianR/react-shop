export enum CategoryType {
  Bebidas = 0,
  Doces = 1,
  Salgados = 2,
}

export interface CategoryResponse {
  id: CategoryType;
  name: 'Bebidas' | 'Doces' | 'Salgados';
}

export interface ProductItem {
  id: number;
  idCategory: CategoryType;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CategoryState extends CategoryResponse {
  icon: string;
}
