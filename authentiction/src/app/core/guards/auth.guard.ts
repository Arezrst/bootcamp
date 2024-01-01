import { Injectable, inject } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  authService = inject(AuthService);

  canActivate(): boolean {
    return this.authService.isLogin;
  }
}
