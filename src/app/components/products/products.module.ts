import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/products/products.reducer';
import { ChipsCellRendererModule } from './chips-cell-renderer/chips-cell-renderer.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ContentHeaderComponent } from 'src/app/components/content-header/content-header.component';

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
