import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/types/appState.interface';
import { ProductInterface } from 'src/types/product.interface';
import { ProductsStateInterface } from 'src/types/productsState.interface';

const selectFeature = (state: AppStateInterface) => state.products;

export const selectProducts = createSelector(
  selectFeature,
  (state: ProductsStateInterface) => state.products
);

export const selectProduct = (id: number) =>
  createSelector(selectFeature, (state: ProductsStateInterface) =>
    state.products.find((item: ProductInterface) => item.id === id)
  );
