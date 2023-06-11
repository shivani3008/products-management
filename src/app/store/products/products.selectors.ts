import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ProductInterface } from 'src/app/types/product.interface';
import { ProductsStateInterface } from 'src/app/types/productsState.interface';

const selectFeature = (state: AppStateInterface) => state.products;

export const selectProducts = createSelector(
  selectFeature,
  (state: ProductsStateInterface) => state.products
);

export const selectProduct = (id: number) =>
  createSelector(
    selectFeature,
    (state: ProductsStateInterface) =>
      state.products.find((item: ProductInterface) => item.id === id) || null
  );
