import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from './service/auth.service'
import {AuthGuard} from './service/auth-guard.service';
import { Page1Component } from './page1/page1.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AuthGuard1 } from './service/auth1-guard.service';
import { Login2Component } from './login2/login2.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { AuthGuard2 } from './service/auth2-guard.service';
import { Homepart1Component } from './homepart1/homepart1.component';
import { Homepart2Component } from './homepart2/homepart2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { Login3Component } from './login3/login3.component';
import { AuthGuard3 } from './service/auth3-guard.service';
import { Login4Component } from './login4/login4.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { AuthGuard4 } from './service/auth4-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncomingComponent } from './incoming/incoming.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    Page1Component,
    DashboardComponent,
    HomeComponent,
    Login1Component,
    Dashboard1Component,
    Login2Component,
    Dashboard2Component,
    Homepart1Component,
    Homepart2Component,
    Dashboard3Component,
    Login3Component,
    Login4Component,
    Dashboard4Component,
    IncomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuard1,
    AuthGuard2,
    AuthGuard3,
    AuthGuard4
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
