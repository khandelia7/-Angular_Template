import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {

    status: String;
    
    constructor(private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        if (this.isLoggedIn2() == "6474GIUG%&**EUEQ6464GVbj^$^*brouw77585rbo%^&v732") {   
            return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login2']);      
        return false;      
    }    
    
    public isLoggedIn2(): String {      
        let status = "false";      
        if (localStorage.getItem('isLoggedIn2') == "6474GIUG%&**EUEQ6464GVbj^$^*brouw77585rbo%^&v732") {      
            status = "6474GIUG%&**EUEQ6464GVbj^$^*brouw77585rbo%^&v732";      
        }    
        else {      
            status = "false";      
        }      
        return status;      
    }      
}