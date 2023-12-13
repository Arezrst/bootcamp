import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { ProductsComponent } from './products/products.component';
import { Component } from '@angular/core';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ProductsRoutComponent } from './products-rout/products-rout.component';

export const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
    children: [
        {
          path: "username",
          component: LoginComponent,
        }, 
        {
          path: "password",
          component: LoginComponent,
        },
      ],  
},
{
  path:'page',
  component:PageComponent
},
{
  path : "",
  component :ProductsRoutComponent,
  children :[
    {
      path: 'products',
      component : ProductsComponent,
    },
    {
    path :'products',
    component: ShowproductsComponent,
    },
  ]
},

];
