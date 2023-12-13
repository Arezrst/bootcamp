import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetnameSrvice } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet  , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items:any
  getnameService = inject (GetnameSrvice)
  ngOnInit() :void{
    this.getnameService.gethttp(261264551 , "Hi").subscribe((data)=>{})

  }
}
