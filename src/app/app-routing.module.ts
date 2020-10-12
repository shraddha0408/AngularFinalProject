import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EyeglassesComponent } from './eyeglasses/eyeglasses.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { PhoneglassesComponent } from './phoneglasses/phoneglasses.component';
import { ReadingglassesComponent }from './readingglasses/readingglasses.component';
import { OnlineexclusiveComponent} from './onlineexclusive/onlineexclusive.component';
import { AboutComponent} from './about/about.component'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import{HeaderComponent} from './header/header.component';
import{AdminComponent} from './admin/admin.component'
import{CartComponent} from './cart/cart.component'



const routes: Routes = [
  {path:'',
  redirectTo:'/home',
  pathMatch:'full'},
  {path: 'home',component:HomeComponent},

  {path:'header',component:HeaderComponent},
  {path: 'eyeglasses',component: EyeglassesComponent},
  {path: 'sunglasses',component: SunglassesComponent},
  {path: 'phoneglasses',component:PhoneglassesComponent},
  {path: 'readingglasses',component:ReadingglassesComponent},
  {path: 'onlineexclusive',component:OnlineexclusiveComponent},
  {path: 'about',component:AboutComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'cart',component:CartComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EyeglassesComponent,SunglassesComponent]
