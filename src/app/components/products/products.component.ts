import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { getProducts } from 'src/app/store/products/products.actions';
import { selectProducts } from 'src/app/store/products/products.selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ProductInterface } from 'src/app/types/product.interface';
import { ChipsCellRendererComponent } from './chips-cell-renderer/chips-cell-renderer.component';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  columnDefs: ColDef[] = [
    {
      field: 'image',
      headerName: '',
      width: 80,
      cellRenderer: ImageRendererComponent,
      resizable: false,
      filter: false,
      cellStyle: { display: 'flex', alignItems: 'center' },
    },
    { field: 'id', headerName: 'Id', width: 80 },
    { field: 'blend_name', headerName: 'Blend Name', minWidth: 80 },
    {
      field: 'origin',
      headerName: 'Origin',
      cellRenderer: ChipsCellRendererComponent,
      minWidth: 250,
      flex: 1,
    },
    { field: 'variety', headerName: 'Variety', flex: 1, minWidth: 100 },
    { field: 'notes', headerName: 'Notes', flex: 2, minWidth: 100 },
    { field: 'intensifier', headerName: 'Intensifier', flex: 1, minWidth: 120 },
  ];
  defaultColDef: ColDef = {
    resizable: true,
    filter: true,
  };
  gridOptions: GridOptions = {
    rowSelection: 'single',
    suppressMenuHide: true,
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
