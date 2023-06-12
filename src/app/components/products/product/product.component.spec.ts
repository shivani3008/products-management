import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ContentHeaderComponent } from '../../content-header/content-header.component';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: Store;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        StoreModule.forRoot({}),
        ContentHeaderComponent,
      ],
      providers: [
        Store<AppStateInterface>,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '123';
                },
              },
            },
          },
        },
        Router,
      ],
    });

    store = TestBed.inject(Store);
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
