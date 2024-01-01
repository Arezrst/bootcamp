import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.routes").then((m)=>m.TaskRoutes)
  }
];
