import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginObj:any={
    username: '',
    password: ''
  }
  constructor(private router:Router){}
  
  onLogin(){
    debugger;
    if(this.loginObj.username == 'admin' &&
    this.loginObj.password == '1234'){
      localStorage.setItem('userRole','admin');
      localStorage.setItem('logUserName','admin');
      this.router.navigateByUrl('customer-page');
    }
    else{
      alert('Wrong user password');
    }
    
  }
}
