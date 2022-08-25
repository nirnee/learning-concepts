import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {

    constructor( 
        private http: HttpClient
    ) { }

    userSignup(data: any): boolean {
        this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/signup', data)
        .subscribe({
            next:(response)=>{
                return true;
            },
            error:(error)=>{
                return false;
            }
        });
        return false;
    }

    setUserInfo(data: any) {
        localStorage.clear();
        localStorage.setItem('token', data.access_token);
    }
}
