import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb:FormBuilder,
      private authServise:AuthService,
      private router: Router
    ){

  }

  loginForm:FormGroup=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  onSubmitLogin(){
    this.authServise.login(this.loginForm.value).subscribe({
      next: ({ data })=>{
        this.authServise.setTokenToLocalStorage(data);
        this.router.navigateByUrl("home");
      },
      error:(error)=>{

      }
    })
  }
}
