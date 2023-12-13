import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GetnameService{
    islogin : boolean = false
    get(name : any , Password:any) : boolean{
        if(name == "Arezoo" && Password=="400522124"){
            this.islogin = true
            return true
        }
        this.islogin = false
        return false
    }
}