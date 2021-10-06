import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user : User;
 
  constructor(private loginService: LoginService) {
      this.user = new User();
  }
 
  validateSignin() {
    if(this.user.email && this.user.password) {
        console.log(this.user)
        console.log(this.loginService.validateSignin)
        this.loginService.validateSignin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }

}
