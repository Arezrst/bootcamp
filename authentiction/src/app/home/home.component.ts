import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  authService = inject(AuthService);
  homeService = inject(HomeService);
  router = inject(Router);

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigateByUrl("auth/login");
  }

  getBooks() {
    this.homeService.getBooks().subscribe({
      next: ({ data }) => {
        console.log(data);
      },error:(error)=>{
        console.log(error);

      }
    })
  }
}
