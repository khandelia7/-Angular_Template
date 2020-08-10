import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ILogin } from '../interface/login'
import {AuthService} from '../service/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  model: ILogin = { userid: "a", password: "a", password1: "a"}  
  loginForm: FormGroup;  
  message: string;  
  returnUrl: string;  
  constructor(  
     private formBuilder: FormBuilder,  
     private router: Router,  
     private authService: AuthService  
  ) { }  


  ngOnInit() {  
     this.loginForm = this.formBuilder.group({  
        userid: ['', Validators.required],  
        password: ['', [Validators.required,Validators.pattern('a')]]  ,
        password1: ['', Validators.required]  
     });  
  this.returnUrl = '/dashboard3';  
  this.authService.logout();  
  }  
 
// convenience getter for easy access to form fields  
get f() { return this.loginForm.controls; }  
get userid() { return this.loginForm.get('userid'); }
get password() { return this.loginForm.get('password'); }
get password1() { return this.loginForm.get('password1'); }

onReset(){
   this.loginForm.reset();
 }
 
 
login() {  
 
  // stop here if form is invalid  
  if (this.loginForm.invalid) {  
     return;  
  }  
  else {  
     if (this.f.userid.value == this.model.userid && 
         this.f.password.value == this.model.password &&
         this.f.password1.value == this.model.password1) {  
     console.log("Login successful");  
     //this.authService.authLogin(this.model);  
     localStorage.setItem('isLoggedIn3', "6474GGH%^&v73F4353gtdgh%^*hfgtsjs43638FDGEURMrbo2");  
     localStorage.setItem('token', this.f.userid.value); 
     alert("Presenting...! ");
     this.router.navigate([this.returnUrl]);  
     }  
  else {  
     this.message = "Please check your userid and password";  
     }  
    }  
 }  
 

}
