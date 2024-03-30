import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthService } from './services/auth-service.service';
import { AuthenticationService } from './services/authentication.service';

export const routes: Routes = [
    {path:'',redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomepageComponent,canActivate: [AuthenticationService]},
    {path:'login',component:LoginComponent}
];
