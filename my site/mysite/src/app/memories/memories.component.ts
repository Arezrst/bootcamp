import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule, RouterLinkActive } from '@angular/router';
import { GetnameService } from './memories.service';

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterModule , RouterLinkActive , ReactiveFormsModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.scss'
})
export class MemoriesComponent {
  constructor(private formbolian : FormBuilder , private getnameService : GetnameService , private router : Router,private activatedRoute:ActivatedRoute){}
  form: any | null = this.formbolian.group({
    username:[''],
    password:[''],
  })
  onClick(){
    console.log(this.form.value);
    if(this.getnameService.get(this.form.value.username , this.form.value.password)){
      this.router.navigate(['/pictures'])
    }
    else{
      this.router.navigate(['/memories'])
    }
}
}
