import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProducts, setProducts } from './products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { CONFIG } from 'src/configs/config';
import { ProductInterface } from 'src/types/product.interface';

@Injectable()
export class ProductsEffect {
  mergeImages = (products: ProductInterface[]) => {
    const images = [
      'coffee1.jpg',
      'coffee2.jpg',
      'coffee3.jpg',
      'coffee4.jpg',
      'coffee5.jpg',
      'coffee6.jpg',
      'coffee7.jpg',
      'coffee8.jpg',
      'coffee9.jpg',
      'coffee10.jpg',
    ];

    return products.map((item, index) => ({
      ...item,
      image: `assets/images/${images[index % images.length]}`,
    }));
  };

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.requestService
          .createRequest(CONFIG.HTTP_METHODS.GET, CONFIG.URLS.GET_PRODUCTS(50))
          .pipe(
            map((response) =>
              setProducts({ products: this.mergeImages(response) })
            ),
            catchError(() => of(setProducts({ products: [] })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}
}
