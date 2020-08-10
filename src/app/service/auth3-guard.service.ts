import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard3 implements CanActivate {

    status: String;
    
    constructor(private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        if (this.isLoggedIn3() == "6474GGH%^&v73F4353gtdgh%^*hfgtsjs43638FDGEURMrbo2") {   
            return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login3']);      
        return false;      
    }    

    public isLoggedIn3(): String {      
        let status = "false";      
        if (localStorage.getItem('isLoggedIn3') == "6474GGH%^&v73F4353gtdgh%^*hfgtsjs43638FDGEURMrbo2") {      
            status = "6474GGH%^&v73F4353gtdgh%^*hfgtsjs43638FDGEURMrbo2";      
        }    
        else {      
            status = "false";      
        }      
        return status;      
    }      
}