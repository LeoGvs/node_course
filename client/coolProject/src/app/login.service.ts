import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateSignin(user: User){
    console.log('login service validate Login')
    return this.http.post('http://localhost:3000/user/signup',{
        first_name : user.first_name,
        last_name : user.last_name,
        email : user.email,
        password : user.password
    })
  }

}
