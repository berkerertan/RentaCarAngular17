import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetlistBootcampStateResponse } from '../../models/responses/bootcampState/getlist-bootcamp-state-response';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrls:[ './homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  private apiUrl1 = "http://localhost:60805/api/Bootcamps"; 
  private apiUrl2 = "http://localhost:60805/api/BootcampStates"; 
  bootcampList:GetlistBootcampResponse[] = [];
  bootcampState:GetlistBootcampStateResponse[] = [];
  
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getListBootcamp();
    this.getListBootcampState();
  }
 getListBootcamp(){
    this.httpClient.get<DataResult<GetlistBootcampResponse[]>>(this.apiUrl1)
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
    this.httpClient.get<GetlistBootcampStateResponse[]>(this.apiUrl2)
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