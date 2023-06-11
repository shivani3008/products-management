import { createAction, props } from '@ngrx/store';
import { ProductInterface } from 'src/app/types/product.interface';

export const getProducts = createAction('[Products Component] GetProducts');

export const setProducts = createAction(
  '[Products Component] SetProducts',
  props<{ products: ProductInterface[] }>()
);
