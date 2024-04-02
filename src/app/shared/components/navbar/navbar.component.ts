import { Component,OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

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
  constructor(){}
   ngOnInit(): void {
     this.getMenuItems();
}
async getMenuItems(){
  if(this.userLogged){
  this.menuItems=[
    {
      label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
    }, 
    
    {
      label:"Kurslar",icon:"pi pi-car",routerLink:'rent-car'
    },
    {
      label:"Profil",icon:"pi pi-user",routerLink:'profil'
    },
    {
      label:"Çıkış Yap",icon:"pi pi-sign-out",routerLink:''
    }
  
  ]}
  else{
    this.menuItems=[
      {
        label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
      },
      {
        label:"Kurslar",icon:"pi pi-car",routerLink:'car-list'
      },
      {
        label:"Giriş Yap",icon:"pi pi-sign-in",routerLink:'login'
      },
      {
        label:"Kayıt Ol",icon:"pi pi-user-plus",routerLink:'register'
      }
    ]
  }
 }

}
