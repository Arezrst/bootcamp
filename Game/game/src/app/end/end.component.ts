import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-end',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {
form: any;
private formBuilder = inject(FormBuilder)

Form = this.formBuilder.group({
  Player1: "",
  Player2: ""
});


user:any = []

twoplayer: boolean = false
ngOnChanges(): void {
  if(this.Form.value.Player1 && this.Form.value.Player2){
    this.twoplayer = true
  }
}


submit(){
  this.user.push(this.Form.value)
  console.log(this.user)
  
}
}
