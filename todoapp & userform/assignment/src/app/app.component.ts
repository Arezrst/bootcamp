import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoappComponent } from './todoapp/todoapp.component';
import { FormGroup , FormsModule , ReactiveFormsModule , FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , TodoappComponent , FormsModule , ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment';
  form = new FormGroup({
    firstname: new FormControl(),
    lastname :new FormControl(),
    phonenumber : new FormControl(),
    search : new FormControl(),
  })
  search(even : any){}

users : any=[]
  onClick(){
    this.form.value
    this.users.push(this.form.value);
  }
}
