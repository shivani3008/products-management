import { setProducts, setSelectedProduct } from './products.actions';
import { ProductsStateInterface } from 'src/types/productsState.interface';
import { createReducer, on } from '@ngrx/store';

const initialState: ProductsStateInterface = {
  products: [],
  selectedProduct: null,
};

export const reducer = createReducer(
  initialState,
  on(setProducts, (state, actions) => ({
    ...state,
    products: actions.products,
  })),
  on(setSelectedProduct, (state, actions) => ({
    ...state,
    selectedProduct: actions.product,
  }))
);
