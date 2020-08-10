import { Injectable } from '@angular/core';
import { ILogin } from '../interface/login'


@Injectable({
    providedIn: 'root' 
})
export class AuthService{
    constructor() { }    
    
    logout() :void {    
        localStorage.setItem('isLoggedIn','false'); 
        localStorage.setItem('isLoggedIn1','false'); 
        localStorage.setItem('isLoggedIn2','false'); 
        localStorage.setItem('isLoggedIn3','false');    
        localStorage.setItem('isLoggedIn4','false');
        localStorage.removeItem('token');    
   }       
}