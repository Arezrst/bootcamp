import { Injectable } from "@angular/core";
import { title } from "process";

@Injectable ({
    providedIn :"root"
})
export class Card{
    Chooseproducts : any;
        list=[{
            id:1,
            Image:"data:image/jpeg;base64,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",
            title: "Bookshelf",
            price:"12$" 
        },
        {
        id:2,
        Image :"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg",
        title : "Deals on shoes",
        price:"60$",
    },
    {
        id:3,
        Image:"https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg",
        title:"Upgrade your office furniture",
        price:"39.5$",
    },
]
    gets(){
        return this.list
    }
    chooseproducts(productsnumber: any){
        console.log(productsnumber);
        this.chooseproducts = productsnumber ;
    }
    }