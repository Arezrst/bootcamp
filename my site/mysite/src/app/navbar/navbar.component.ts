import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor (private router : Router){}

  menuItem: any[] = [

    {
      title : 'Form',
      link : 'form',
    },
  ];

  onClick(link: string ){
    this.router.navigateByUrl(link);
  }
}
