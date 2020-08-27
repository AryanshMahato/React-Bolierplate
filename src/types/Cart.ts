import { Product } from './Product';

export interface Cart {
  id: string;
  name: string;

  products?: Product[];
}
