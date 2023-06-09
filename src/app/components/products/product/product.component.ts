import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectProduct } from 'src/store/products/products.selectors';
import { AppStateInterface } from 'src/types/appState.interface';
import { ProductInterface } from 'src/types/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  product!: ProductInterface | null;
  origin: string[] = [];
  notes: string[] = [];

  convertStringToArray = (str: string) =>
    str.split(',').map((item: string) => item.trim());

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (!productId) this.router.navigate(['/products']);

    this.store
      .pipe(select(selectProduct(Number(productId))))
      .subscribe((product) => {
        if (!product) {
          this.router.navigate(['/products']);
          return;
        }

        this.product = product;
        this.origin = this.convertStringToArray(product.origin);
        this.notes = this.convertStringToArray(product.notes);
      });
  }
}
