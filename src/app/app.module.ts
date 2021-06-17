import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { ProductAlertComponent } from './views/product-alert/product-alert.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './views/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
