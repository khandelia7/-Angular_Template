import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {AuthService} from '../service/auth.service'

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  id: string;  
  
  constructor(private router: Router, private authService: AuthService) { }  

  ngOnInit() {  
    this.id = localStorage.getItem('token');  
    //console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login1']);  
  } 

}
