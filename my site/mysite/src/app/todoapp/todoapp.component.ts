import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.scss'
})
export class TodoappComponent {
  
  name: string=""

  list:string[]=[]
  getname(salam : any){
    console.log(salam.target.value);
    this.name=salam.target.value
  }
  dontknow(){
    this.list.push(this.name)
  }
  delete(give :any){
    this.list.splice(give , 1)
  }

}
