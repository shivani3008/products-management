import { createAction, props } from '@ngrx/store';
import { ProductInterface } from 'src/types/product.interface';

export const getProducts = createAction('[Products Component] GetProducts');

export const setProducts = createAction(
  '[Products Component] SetProducts',
  props<{ products: ProductInterface[] }>()
);

export const setSelectedProduct = createAction(
  '[Products Component] setSelectedProduct',
  props<{ product: ProductInterface }>()
);
