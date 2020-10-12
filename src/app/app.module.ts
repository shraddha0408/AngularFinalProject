import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadingglassesComponent } from './readingglasses/readingglasses.component';
import {PhoneglassesComponent} from './phoneglasses/phoneglasses.component';
import { OnlineexclusiveComponent } from './onlineexclusive/onlineexclusive.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { EyeglassesComponent } from './eyeglasses/eyeglasses.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { from } from 'rxjs';
import { ProductItemoComponent } from './product-itemo/product-itemo.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistItemComponent } from './wishlist/wishlist-item/wishlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    ReadingglassesComponent,
    PhoneglassesComponent,
    OnlineexclusiveComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    EyeglassesComponent,
    SunglassesComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductItemoComponent,
    AdminComponent,
    CartComponent,
    CartItemComponent,
    WishlistComponent,
    WishlistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
