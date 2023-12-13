import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetnameService } from './login.service';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule , ReactiveFormsModule,RouterModule,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formbolian : FormBuilder , private getnameService : GetnameService , private router : Router,private activatedRoute:ActivatedRoute){}
  form: any | null = this.formbolian.group({
    username:[''],
    password:[''],
  })
  onClick(){
    console.log(this.form.value);
    if(this.getnameService.get(this.form.value.username , this.form.value.password)){
      this.router.navigate(['/page'])
    }
    else{
      this.router.navigate(['/login'])
    }
}
}