import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AuthGuard1 } from './service/auth1-guard.service';
import { Login2Component } from './login2/login2.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { AuthGuard2 } from './service/auth2-guard.service';
import { Login3Component } from './login3/login3.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { AuthGuard3 } from './service/auth3-guard.service';
import { Login4Component } from './login4/login4.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { AuthGuard4 } from './service/auth4-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},

  {path: 'login0' , component: LoginComponent},
  { path: 'dashboard0', component: DashboardComponent, canActivate : [AuthGuard] },

  {path: 'login1' , component: Login1Component},
  { path: 'dashboard1', component: Dashboard1Component, canActivate : [AuthGuard1] },

  {path: 'login2' , component: Login2Component},
  { path: 'dashboard2', component: Dashboard2Component, canActivate : [AuthGuard2] },

  {path: 'login3' , component: Login3Component},
  { path: 'dashboard3', component: Dashboard3Component, canActivate : [AuthGuard3] },

  {path: 'login4' , component: Login4Component },
  { path: 'dashboard4', component: Dashboard4Component, canActivate : [AuthGuard4] },

  {path: '**', component: NotFoundComponent}, // Wild-Card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
