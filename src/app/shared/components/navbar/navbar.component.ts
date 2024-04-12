import { Component,OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../features/services/concretes/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems!:MenuItem[];
  userLogged!:boolean;
  constructor(private authService:AuthService,private router:Router){}
   ngOnInit(): void {
     this.getMenuItems();
     console.log(this.getUserName());
     console.log(this.getUserId());
     console.log(this.authService.getRoles())
}

logOut(){
  this.authService.logOut();
  this.router.navigate(['home-page'])
}

setUserLogged(){
  return this.userLogged=this.authService.loggedIn()
}

getUserName():string{
  return this.authService.getApplicantName();
}

getUserId():string{
  return this.authService.getCurrentUserId();
}



async getMenuItems(){
  const isLoggedIn = await this.authService.loggedIn();
    if(isLoggedIn){
  this.menuItems=[
    {
      label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
    }, 
    
    {
      label:"Kurslar",icon:"pi-book",routerLink:'bootcamp-list'
    },
    {
      label:this.getUserName(),icon:"pi pi-user",routerLink:'profil'
    },
    {
      label:"Çıkış Yap",icon:"pi pi-sign-out",command:()=>this.logOut()
    },
    {
      label:await this.getUserName(),icon:"pi pi-user",routerLink:'profil'
    },
  ]}

  else{
    this.menuItems=[
      {
        label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
      },
      {
        label:"Kurslar",icon:"pi-book"
      },
      {
        label:"Giriş Yap",icon:"pi pi-sign-in",routerLink:'login'
      },
      {
        label:"Kayıt Ol",icon:"pi pi-user-plus",routerLink:'register'
      }
    ]
  }
  if(this.authService.isAdmin()){
    this.menuItems.push(
    {
      label:"Admin Panel",routerLink:'admin'
    },
  )
  }
 }
 

}
