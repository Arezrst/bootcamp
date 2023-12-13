import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetnameService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public authService: GetnameService){}

}
