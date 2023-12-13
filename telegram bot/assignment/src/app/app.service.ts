import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn :"root"
})
export class GetnameSrvice{
    
    http=inject(HttpClient)
    gethttp(chat_id:any,Text:any){ 
        let data : any = { chat_id :chat_id ,text :Text}
        return this.http.post(`https://api.telegram.org/bot6236053876:AAFWEcJJOLK7V1XRy5PUVazotWDmAymiygg/sendMessage` , data)
    }
}