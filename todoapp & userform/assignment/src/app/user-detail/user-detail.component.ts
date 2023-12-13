import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute , RouterModule , Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private router:Router, 
    private activatedRoute : ActivatedRoute,
    private formBuilder : FormBuilder)
    {
      this.id = this.activatedRoute.snapshot.paramMap.get( 'id' )
      console.log( this.id );
    }
    id!: string | null
    user : any[]=[
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
