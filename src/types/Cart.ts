import { Product } from './Product';

export interface Cart {
  id: string;
  email: string;

  products?: Array<Omit<Product, 'imagePath'>>;
}

export interface AddToCartValues {
  userId: string;
  productId: string;
}
export interface RemoveFromCartValues {
  userId: string;
  productId: string;
  total?: boolean;
}
