import { ProductInterface } from './product.interface';

export interface ProductsStateInterface {
  products: ProductInterface[];
  selectedProduct: ProductInterface | null;
}
