import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { header } from "src/environments/config";

@Injectable()
export class AboutService {
    constructor(
        private http: HttpClient
    ){
        //comment here
    }

    //return faq list
    getFaq(){   
        return this.http.get('https://ai-lab-backend.herokuapp.com/api/v1/admin/faq', {
            headers:header
        });
    }
}