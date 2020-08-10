import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    status: String;
    
    constructor(private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        if (this.isLoggedIn() == "aA69r3h-745dsve+!gdt45js") {   
            return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login0']);      
        return false;      
    }    

    public isLoggedIn(): String {      
        let status = "false";      
        if (localStorage.getItem('isLoggedIn') == "aA69r3h-745dsve+!gdt45js") {      
            status = "aA69r3h-745dsve+!gdt45js";      
        }    
        else {      
            status = "false";      
        }      
        return status;      
    }  
}