import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from './products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  items:any=[]
 constructor(private protectes: Card){
  this.items = this.protectes.gets()
  console.log(this.items);
  console.log();
 }
}
