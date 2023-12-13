import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Gethttpservice } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:any
  gethttpservice= inject( Gethttpservice)
ngOnInit(): void {
this.gethttpservice.getapihttp().subscribe({
  next: (data:any)=>{
    this.items=data
    
  }
})
}
}