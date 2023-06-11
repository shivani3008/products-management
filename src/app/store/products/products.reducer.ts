import { createReducer, on } from '@ngrx/store';
import { ProductsStateInterface } from 'src/app/types/productsState.interface';
import { setProducts } from './products.actions';

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
