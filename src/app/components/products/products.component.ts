import { Component } from '@angular/core';
import { ProductInterface } from 'src/types/product.interface';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Store, select } from '@ngrx/store';
import { getProducts } from 'src/store/products/products.actions';
import { selectProducts } from 'src/store/products/products.selectors';
import { AppStateInterface } from 'src/types/appState.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Id' },
    { field: 'blend_name', headerName: 'Blend Name' },
    { field: 'origin', headerName: 'Origin' },
    { field: 'variety', headerName: 'Variety' },
    { field: 'notes', headerName: 'Notes' },
    { field: 'intensifier', headerName: 'Intensifier' },
  ];
  gridOptions: GridOptions = {
    rowSelection: 'single',
  };
  products$: Observable<ProductInterface[]>;
  paginationPageSize: number = 10;

  constructor(private store: Store<AppStateInterface>) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
  }
}
