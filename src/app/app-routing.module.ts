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
    path: "user", loadChildren : "./User Module/user.module#UserModule"
  },
  {
    path: "products", loadChildren : "./Products Module/products.module#ProductsModule"
  },
  {
    path: "contact", loadChildren : "./Contact Module/contact.module#ContactModule"
  },
  {
    path: "cart", loadChildren : "./Cart Module/cart.module#CartModule"
  },
  {
    path:"**",component:PageNotFoundComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);