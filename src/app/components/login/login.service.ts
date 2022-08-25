import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor( 
        private http: HttpClient
    ) { }

    userLogin(data: any): any {
        this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/login', data)
        .subscribe({
            next:(response)=>{
                localStorage.setItem('userData',JSON.stringify(response));
            },
            error:(error)=>{
                console.log(error);
            }
        });
    }
}
