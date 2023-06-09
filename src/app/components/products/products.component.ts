import { Component } from '@angular/core';
import { ProductInterface } from 'src/types/product.interface';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { Store, select } from '@ngrx/store';
import { getProducts } from 'src/store/products/products.actions';
import { selectProducts } from 'src/store/products/products.selectors';
import { AppStateInterface } from 'src/types/appState.interface';
import { Observable } from 'rxjs';
import { ChipsCellRendererComponent } from './chips-cell-renderer/chips-cell-renderer.component';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  columnDefs: ColDef[] = [
    {
      width: 80,
      cellRenderer: ImageRendererComponent,
      resizable: false,
      filter: false,
    },
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'blend_name', headerName: 'Blend Name' },
    {
      field: 'origin',
      headerName: 'Origin',
      cellRenderer: ChipsCellRendererComponent,
      minWidth: 250,
      flex: 1,
    },
    { field: 'variety', headerName: 'Variety' },
    { field: 'notes', headerName: 'Notes', flex: 1 },
    { field: 'intensifier', headerName: 'Intensifier', flex: 1 },
  ];
  defaultColDef: ColDef = {
    resizable: true,
    filter: true,
  };
  gridOptions: GridOptions = {
    rowSelection: 'single',
  };
  products$: Observable<ProductInterface[]>;
  paginationPageSize: number = 10;
  private gridApi!: GridApi<ProductInterface>;

  constructor(private store: Store<AppStateInterface>, private router: Router) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
  }

  onGridReady(params: GridReadyEvent<ProductInterface>) {
    this.gridApi = params.api;
  }

  onSelectionChanged() {
    const selectedRow: ProductInterface = this.gridApi.getSelectedRows()?.[0];
    this.router.navigate(['/products', selectedRow.id]);
  }
}
