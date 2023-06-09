import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
      },
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
