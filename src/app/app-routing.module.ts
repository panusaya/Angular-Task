import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './Customer/customer-page/customer-page.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path:'customer-page',
        component:CustomerPageComponent
      }
    
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
