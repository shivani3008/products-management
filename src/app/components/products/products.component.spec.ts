import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { AgGridModule } from 'ag-grid-angular';
import { of } from 'rxjs';
import { getProducts } from 'src/app/store/products/products.actions';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ContentHeaderComponent } from '../content-header/content-header.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: Store;
  let router: Router;
  const products = [
    {
      id: 2189,
      uid: '569d82a1-010c-45fb-96fc-3b8acfd994bc',
      blend_name: "Captain's Forrester",
      origin: 'Madriz, Nicaragua',
      variety: 'Catuai',
      notes: 'deep, smooth, olive, baggy, magnolia',
      intensifier: 'dry',
    },
    {
      id: 9106,
      uid: '4408f1b6-3ff2-49ff-8871-0dff00dfc674',
      blend_name: 'Cascara Blend',
      origin: 'Acatenango, Guatemala',
      variety: 'Blue Mountain',
      notes: 'structured, velvety, prune, squash, rye',
      intensifier: 'delicate',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [StoreModule.forRoot({}), ContentHeaderComponent, AgGridModule],
      providers: [Store<AppStateInterface>, Router],
    });
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.returnValue(of(products));
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getProducts action on initialization', () => {
    expect(store.dispatch).toHaveBeenCalledWith(getProducts());
  });

  it('should display products correctly', () => {
    const productElements = fixture.nativeElement.querySelectorAll('.ag-row');

    expect(productElements.length).toBe(2);
    expect(productElements[0].textContent).toContain(`Captain's Forrester`);
    expect(productElements[1].textContent).toContain('Cascara Blend');
  });
});
