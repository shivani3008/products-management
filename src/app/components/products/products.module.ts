import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { StoreModule } from '@ngrx/store';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContentHeaderComponent } from 'src/app/components/content-header/content-header.component';
import { reducer } from 'src/app/store/products/products.reducer';
import { ChipsCellRendererModule } from './chips-cell-renderer/chips-cell-renderer.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    AgGridModule,
    StoreModule.forFeature('products', reducer),
    ChipsCellRendererModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    ContentHeaderComponent,
  ],
})
export class ProductsModule {}
