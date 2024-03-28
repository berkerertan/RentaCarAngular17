import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    {path:'',redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomepageComponent},
    {path:'login',component:LoginComponent}
];
