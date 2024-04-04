import { Routes } from '@angular/router';
import { LoginComponent } from './features/components/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BootcampListGroupComponent } from './features/components/bootcamps/bootcamp-list-group/bootcamp-list-group.component';
import { RegisterComponent } from './features/components/register/register.component';


export const routes: Routes = [
    {path:'',redirectTo:'home-page',pathMatch:'full'},
   {path:"home-page",component:HomepageComponent,children:[
      {path:"",pathMatch:"full",component:BootcampListGroupComponent},
      {path:"cars/model",pathMatch:"full",component:BootcampListGroupComponent},
      {path:"cars/model/:modelId",component:BootcampListGroupComponent}
   ]},
   {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent}
];
