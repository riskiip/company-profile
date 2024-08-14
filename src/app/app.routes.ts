import { Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageComponent },
  { path: 'products', component: AllProductComponent },
];
