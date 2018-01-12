import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import {RouterModule, Routes} from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarComponent } from './components/navbar/navbar.component';



const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'buyers', component: BuyersComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent,
    NavBarComponent,
    BuyersComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }