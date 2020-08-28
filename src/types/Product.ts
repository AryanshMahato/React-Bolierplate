export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imagePath: string;
  quantity: number;
}

export type AddToCartFunction = (productId: number) => void;
