import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../../store/products/products.reducer';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    AgGridModule,
    StoreModule.forFeature('products', reducer),
  ],
})
export class ProductsModule {}
