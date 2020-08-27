import { Product } from './Product';

export interface Cart {
  id: string;
  username: string;

  products?: Product[];
}
