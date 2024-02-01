import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
onClick() {
  this.Data.push({
    firstPlayer : this.form.value.firstPlayer ,
    secondPlayer : this.form.value.secondPlayer ,
  })
  this.form.setValue ({
    firstPlayer : '',
    secondPlayer : '',
  })
}
  form :FormGroup;
  Data : any[] = []

constructor (private formBuilder: FormBuilder, private router: Router, private GameService: GameService, private fb:FormBuilder ){
  this.form = fb.group ({
    firstPlayer : new FormControl(''),
    secondPlayer : new FormControl(''),
})
}
@Output() enterSubmit = new EventEmitter<FormGroup>();

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      FirstPlayer: ['', Validators.required],
      SecondPlayer: ['',  Validators.required]
    });
  }
}

   