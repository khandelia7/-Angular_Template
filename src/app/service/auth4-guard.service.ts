import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard4 implements CanActivate {

    status: String;
    
    constructor(private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        if (this.isLoggedIn4() == "GSdDdHF643^$8GFG^%gYddh^$^927FJD-?]SGUFSJ^>}jdbvjb%%637S3jb|+7vjsRbv") {   
            return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login4']);      
        return false;      
    }    

    public isLoggedIn4(): String {      
        let status = "false";      
        if (localStorage.getItem('isLoggedIn4') == "GSdDdHF643^$8GFG^%gYddh^$^927FJD-?]SGUFSJ^>}jdbvjb%%637S3jb|+7vjsRbv") {      
            status = "GSdDdHF643^$8GFG^%gYddh^$^927FJD-?]SGUFSJ^>}jdbvjb%%637S3jb|+7vjsRbv";      
        }    
        else {      
            status = "false";      
        }      
        return status;      
    }     
}