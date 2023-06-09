import { setProducts } from './products.actions';
import { ProductsStateInterface } from 'src/types/productsState.interface';
import { createReducer, on } from '@ngrx/store';

const initialState: ProductsStateInterface = {
  products: [],
};

export const reducer = createReducer(
  initialState,
  on(setProducts, (state, actions) => ({
    ...state,
    products: actions.products,
  }))
);
