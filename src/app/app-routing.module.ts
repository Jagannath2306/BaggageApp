import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home Module/home/home.component';
import { PageNotFoundComponent } from './Home Module/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "user", loadChildren : () => import('./User Module/user.module').then(m => m.UserModule)
  },
  {
    path: "products", loadChildren : () => import('./Products Module/products.module').then(m => m.ProductsModule)
  },
  {
    path: "contact", loadChildren : () => import('./Contact Module/contact.module').then(m => m.ContactModule)
  },
  {
    path: "cart", loadChildren : () => import('./Cart Module/cart.module').then(m => m.CartModule)
  },
  {
    path:"**",component:PageNotFoundComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);