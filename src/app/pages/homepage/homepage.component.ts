import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetlistBlacklistResponse } from '../../models/responses/blacklist/getlist-blacklist-response';
import { GetlistBootcampStateResponse } from '../../models/responses/bootcampState/getlist-bootcamp-state-response';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
//import { TodoResponse } from '../../models/todo-response';
//import { ModelListResponse } from '../../models/responses/model-list-response';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  bootcampList:GetlistBootcampResponse[] = [];
  bootcampState:GetlistBootcampStateResponse[] = [];
  
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getListBootcamp();
  }
  ngOnInit1(): void {
    this.getListBootcampState();
  }
 getListBootcamp(){
    this.httpClient.get<DataResult<GetlistBootcampResponse[]>>("http://localhost:5278/api/Bootcamps")
    .subscribe({
      next:(response:DataResult<GetlistBootcampResponse[]>)=>{
        console.log("Cevap geldi :",response);
        this.bootcampList=response.data;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }
  getListBootcampState(){
    this.httpClient.get<GetlistBootcampStateResponse[]>("http://localhost:5278/api/BootcampStates")
    .subscribe({
      next:(response:GetlistBootcampStateResponse[])=>{
        console.log("Cevap geldi :",response);
        this.bootcampState=response;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }
  }
  export interface DataResult<T> {
    data:T;
    success:boolean;
    message:string;
}


