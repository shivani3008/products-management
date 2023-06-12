import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AgGridModule } from 'ag-grid-angular';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ContentHeaderComponent } from '../content-header/content-header.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [StoreModule.forRoot({}), ContentHeaderComponent, AgGridModule],
      providers: [Store<AppStateInterface>],
    });
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
