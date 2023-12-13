import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule , RouterModule , FormsModule , ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  list :any=[]
  form = new FormGroup({
    firstname: new FormControl(),
    lastname :new FormControl(),
    phonenumber : new FormControl(),
    emailaddress : new FormControl(),
  })
  search(even : any){}

users : any=[]
  onClick(){
    console.log(this.form.value);
    this.form.value
    this.users.push(this.form.value);
    this.list.push(this.form.value)
    console.log(this.list);

  }
}
