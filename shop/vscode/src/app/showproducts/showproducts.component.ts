import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../products/products.service';

@Component({
  selector: 'app-showproducts',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.scss'
})
export class ShowproductsComponent {
  id:any;
  constructor( private rout : ActivatedRoute , public products : Card){}

  ngOnInit() : void {
    this.id = this.rout.snapshot.paramMap.get("id");
    console.log(this.id);
    for(let index = 0 ; index < this.products.list.length ; index++){
      if(this.id==this.products.list[index].id){
        this.products.chooseproducts(this.products.list[index])
      }
    }
  }
}
