import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-rout',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './products-rout.component.html',
  styleUrl: './products-rout.component.scss'
})
export class ProductsRoutComponent {

}
