import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {

    status: String;
    
    constructor(private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        if (this.isLoggedIn1() == "aA69K_&^5r3hGDTGEEG74640+5s") {   
            return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login1']);      
        return false;      
    }    

    public isLoggedIn1(): String {      
        let status = "false";      
        if (localStorage.getItem('isLoggedIn1') == "aA69K_&^5r3hGDTGEEG74640+5s") {      
            status = "aA69K_&^5r3hGDTGEEG74640+5s";      
        }    
        else {      
            status = "false";      
        }      
        return status;      
    }  
}