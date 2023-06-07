import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProducts, setProducts } from './products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { CONFIG } from 'src/configs/config';

@Injectable()
export class ProductsEffect {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.requestService
          .createRequest(CONFIG.HTTP_METHODS.GET, CONFIG.URLS.GET_PRODUCTS(50))
          .pipe(
            map((response) => setProducts({ products: response })),
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
