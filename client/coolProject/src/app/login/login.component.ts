import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user : User;
 
  constructor(private loginService: LoginService, private router: Router) {
      this.user = new User();
  }
 
  validateSignin() {
    if(this.user.first_name && this.user.last_name && this.user.email && this.user.password) {
        console.log(this.user)
        this.loginService.validateSignin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }

  validateLogin() {
    if(this.user.email && this.user.password) {
        console.log(this.user)
        this.loginService.validateLogin(this.user).subscribe(result => {
          console.log('result is ', result);
          window.sessionStorage.setItem('user', JSON.stringify(result))
          this.router.navigate(['/home']);
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter your email and password');
    }
  } 

}
