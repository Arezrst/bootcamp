import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Gethttpservice{
    http=inject(HttpClient)
    getapihttp(){
      return  this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }
  }