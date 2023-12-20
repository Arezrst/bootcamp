import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , CommonModule ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
[x: string]: any;
  Form = inject (FormBuilder)
  form1 : any | null = this.Form.group({
    name:[''],
  })
  form2 : any | null = this.Form.group({
    name:[''],
  })
  onClick1(){
    console.log(this.form1.value.name)
  }
  onClick2(){
    console.log(this.form2.value.name)
  }
}
