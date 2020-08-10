import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {AuthService} from '../service/auth.service'

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  id: string;  
  
  constructor(private router: Router, private authService: AuthService) { 
  }  

  ngOnInit() {  
    this.id = localStorage.getItem('token');  
    //console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login2']);  
  } 

}
