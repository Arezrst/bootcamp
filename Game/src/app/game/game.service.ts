import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";


@Injectable ({
    providedIn : "root"
})

export class GetnameService{
    http = Inject (HttpClient)
    name : any =[]
    gethttp(){
        var data={
            name1 : name
        }
        this.name = data
        return this.http.post(`http://localhost:4000` , data)
    }

    score(scoreNum: number, firstPalyerScore:number, secondPalyerScore:number){
        if(scoreNum<4){
            firstPalyerScore++
        }else{
            secondPalyerScore++
        }
        return [firstPalyerScore, secondPalyerScore]
    }

    checkWinner(firstPalyerScore:number, secondPalyerScore:number, buttonDisabled:boolean){
        if(firstPalyerScore > 4){
            console.log("winner is first player")
            return buttonDisabled = true
        }
        if(secondPalyerScore >=5){
            console.log("winner is second player")
            return buttonDisabled = true
        }
        return false
    }

}

