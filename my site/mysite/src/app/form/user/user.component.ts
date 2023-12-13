import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user: any[]=[
    {
      id: 1,
      firstname : "Arezoo",
      lastname: "Rostami",
      phonenumber : "09102417600",
      emailaddress : "00arezoorostami00@gmail.com"
    },
    {
      id: 2,
      firstname : "Hadis",
      lastname: "Bahrami",
      phonenumber : "09199804355",
      emailaddress : "hadisehbahrami43528@gmaiol.com"
    },
    {
      id : 3,
      firstname : "Maede",
      lastname: "Abdollahi",
      phonenumber : "09936941818",
      emailaddress : "maedehabdollahi1800@gmaiol.com"
    }
  ]
}
