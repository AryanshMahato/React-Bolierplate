import { Product } from './index';

export interface Cart {
  id: string;
  username: string;

  products?: Product[];
}
