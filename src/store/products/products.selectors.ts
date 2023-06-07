import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/types/appState.interface';
import { ProductsStateInterface } from 'src/types/productsState.interface';

const selectFeature = (state: AppStateInterface) => {
  console.log(state);
  return state.products;
};

export const selectProducts = createSelector(
  selectFeature,
  (state: ProductsStateInterface) => state.products
);
