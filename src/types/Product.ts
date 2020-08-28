export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imagePath: string;
}

export type AddToCartFunction = (productId: number) => void;
